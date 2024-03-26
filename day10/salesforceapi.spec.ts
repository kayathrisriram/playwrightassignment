
import {test,expect} from '@playwright/test'
let accessToken:any
let uri:any
let oppoid:any

test(`Generate AuthToken`,async({request})=>{


const response=await request.post("https://login.salesforce.com/services/oauth2/token",{
headers:{
"Content-Type":"application/x-www-form-urlencoded",
"Connection":"Keep-alive"
},
form:{
"grant_type":"password",
"client_id":"3MVG9NnK0U_HimV776dWfB5VQgJMZ1jwzifbJ03XESMea99R2HWSa9Va6mMaFgV0pnozl2m.yCpfOMt2uaQ7A",
"client_secret":"DFC4058273559CAB9C01309A643D51ECEA322135E60C01D44FA494ED06AF50D1",
"username":"kayathri@testleaf.com",
"password":"Kayu@1234"
}
})


const genrateToken=await response.json();
console.log(genrateToken);
accessToken=genrateToken.access_token;
uri=genrateToken.instance_url;


console.log(`The Bearer token is ${accessToken} and the uri is ${uri}`)
})


//creating the oppo
test(`Create a opportunity with salesforce`,async({request})=>{


const response =await request.post(`${uri}/services/data/v60.0/sobjects/Opportunity/`,{


headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+accessToken
},
data:
    {
    "Name":"Call",
    "StageName":"Qualification",
    "CloseDate":"2023-12-07"
    }
})
const resBody=await response.json();
console.log(resBody);
oppoid=await resBody.id;
console.log(oppoid)
})
//getting the oppo
test(`getting a opportunity with salesforce`,async({request})=>{


    const response =await request.get(`${uri}/services/data/v60.0/sobjects/Opportunity/${oppoid}`,{
    headers:{
    "Content-Type":"application/json",
    "Authorization":"Bearer "+accessToken
    }
    })
    const resBody=await response.json();
    console.log(resBody);
    })

    //patch the oppo created
    test(`patching a opportunity with salesforce`,async({request})=>{


        const response =await request.patch(`${uri}/services/data/v60.0/sobjects/Opportunity/${oppoid}`,{
        headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+accessToken
        },
        data:
    {
        "StageName":"Needs Analysis"
    }
  })
       expect (response.status()).toBe(204)
        })
//deleting oppo
test(`delete a opportunity with salesforce`,async({request})=>{
    const response =await request.delete(`${uri}/services/data/v60.0/sobjects/Opportunity/${oppoid}`,{
    headers:{
    "Content-Type":"application/json",
    "Authorization":"Bearer "+accessToken
    }
})
   expect (response.statusText()).toBe('No Content')
   expect (response.status()).toBe(204)
    })

