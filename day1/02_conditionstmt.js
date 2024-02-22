let browsername = "chrome";
function launchbrowser(browsername)
{
    if (browsername == "chrome")
    {
        console.log("launching chrome browser");
    }
    else
    {
        console.log("launching different browser");
    }
}
launchbrowser(browsername);
let testType ="sanity";
function runTests(){
    switch(testType){
    case  "Smoke" :
        console.log("smoke tests");
        break;
    case "Regression" :
        console.log("Regression tests");
        break;
    case "sanity":
        console.log("sanity tests")
        break;
    default:
        console.log("functional tests");
}}

runTests(testType);
