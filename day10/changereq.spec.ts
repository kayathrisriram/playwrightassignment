import {test,expect} from '@playwright/test'
let sysid:any

//creating new cr
test(`Learning API basics`, async ({ request }) => {

    

    const response = await request.post("https://dev248413.service-now.com/api/now/table/change_request",
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic YWRtaW46TW9uZXkkMTIz"
            },
            data: {
                "short_description": "create a new CR thru api"

            }
        });

    const responseBody = await response.json();
    console.log(responseBody)
    sysid = responseBody.result.sys_id
    console.log(responseBody.result.number);
})

//get the created cr
test(`getting the created cr `, async ({ request }) => {

    const response = await request.get(`https://dev248413.service-now.com/api/now/table/change_request/${sysid}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic YWRtaW46TW9uZXkkMTIz"
            }
        })
        
    const responseBody = await response.json();
        console.log(responseBody)
        expect(response.statusText()).toBe('OK')
        
    })

    test(`patching CR`,async({request})=>{


        const response =await request.patch(`https://dev248413.service-now.com/api/now/table/change_request/${sysid}`,{
        headers:{
        "Content-Type":"application/json",
        "Authorization":"Basic YWRtaW46TW9uZXkkMTIz"
        },
        data:
        {
            "short_description":"created by Kayathri-modified"
        }
  })
       expect (response.status()).toBe(200)
        })

//DELETING CR
        test(`delete a CR `,async({request})=>{
            const response =await request.delete(`https://dev248413.service-now.com/api/now/table/change_request/${sysid}`,{
            headers:{
            "Content-Type":"application/json",
            "Authorization":"Basic YWRtaW46TW9uZXkkMTIz"
            }
        })
           expect (response.statusText()).toBe('No Content')
           expect (response.status()).toBe(204)
            })
        