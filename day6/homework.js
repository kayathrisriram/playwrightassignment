var _a;
/*
Task: 1
1. Define multiple overloaded signatures for the 'handleResponse' function.
   - Each signature should specify a status code (`200`, `404`, `500`) as an argument, and a `string` type for the response.
   - Also, define the corresponding return type for each signature (`object` for `200`, `null` for `404`, and `Error` for `500`).

2. Write the implementation of the `handleResponse` function.
   - Use a single function signature with `statusCode` as a `number` and `response` as an `object`.
   - The return type should be a union type: `object | null | Error`.
   - Inside the function, use a `switch` statement to handle different `statusCode` values.
   - Return the appropriate type for each case: the response object, `null`, or a new `Error`.

3. Test the function by calling `handleResponse` with different status codes and response objects.
4. Run the TypeScript file and observe the console output.
   
*/
function handleResponse(status_code, response) {
}
/*
Task: 2
1. Create a`findMissingNumber.ts`.

2. Define a function.
   - The function should take one parameter, `arr`, which is an array of numbers (`number[]`).

3. Inside the function, use a `for` loop to iterate through the array.
   - In each iteration, check if the next number in the array is consecutive.
        If it isn't, return the current number plus one (which is the missing number).
   - If the loop completes without finding the missing number, return `-1`.

4. Call the function with an  array (For example: `const myArray = [1, 2, 3, 5, 6];`)
    and store the result in a variable. Print the result.
    */
var myArray = [1, 2, 3, 5, 6];
var myArrayone = [1, 2, 3, 4, 5];
function findmissingnumber(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return -1;
}
console.log("missed number is :  " + findmissingnumber(myArray)); //4
console.log("missed number is :  " + findmissingnumber(myArrayone)); //-1
/*
 Task: 3

Note: Implement the same using an anonymous function and arrow function.
*/
var myArra = [1, 2, 3, 5, 6];
var myArrone = [1, 2, 3, 4, 5];
var missingnumber = function (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return -1;
};
console.log("missed number is :  " + missingnumber(myArray)); //4
console.log("missed number is :  " + missingnumber(myArrayone)); //-1
var a = [1, 2, 3, 5, 6];
var b = [1, 2, 3, 4, 5];
var missing = function (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return -1;
};
console.log("missed number is :  " + missing(a)); //4
console.log("missed number is :  " + missing(b));
/*
Task: 4

1. Define the Enum for Roles:
   - Declare an enum named `Role` with members such as `Admin`, `Editor`, and `Viewer`.

2. **Define the Object Literal for Permissions**:
   - Create an object `rolePermissions`.
   - For each role in the `Role` enum, define an object with keys as permissions (like 'create', 'edit', etc.)
     and boolean values indicating whether the role has that permission.

3. Define a function called `hasPermission` that takes two parameters: a `Role` and a `permission` string.
   - In the function, retrieve the permissions object for the given role and check if the specified permission is set to `true`.

4. Create test cases to verify if specific roles have certain permissions. For example, check if `Role.Admin` has the 'delete' permission.
   - Print the results of these tests.

*/
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["Editor"] = "Editor";
    Roles["Viewer"] = "Viewer";
})(Roles || (Roles = {}));
var rolePermissions = (_a = {},
    _a[Roles.Admin] = {
        create: true,
        edit: true,
        delete: true
    },
    _a[Roles.Editor] = {
        create: false,
        edit: true,
        delete: false
    },
    _a[Roles.Viewer] = {
        create: false,
        edit: false,
        delete: false
    },
    _a);
function hasPermission(role, permission) {
    //const permissions = rolePermissions[role];
    return rolePermissions[role][permission] === true;
}
console.log("Admin has delete permission: ".concat(hasPermission(Roles.Admin, 'delete')));
console.log("Editor has create permission: ".concat(hasPermission(Roles.Editor, 'create'))); //edit false
console.log("Viewer has edit permission: ".concat(hasPermission(Roles.Viewer, 'edit')));
// function hasPermission(role: Roles, permission: string): any {
//    const permissions = rolePermissions[role];
//    if (!permissions) return true; 
//    return !!permissions[permission]; 
// }
// console.log("Admin can delete:", hasPermission(Roles.Admin, 'delete')); 
// console.log("Editor can delete:", hasPermission(Roles.Editor, 'delete')); 
// console.log("Viewer can edit:", hasPermission(Roles.Viewer, 'edit'));
// console.log("Viewer can view:", hasPermission(Roles.Viewer, 'create'));
/*
Function Signature:

typescript

function hasPermission(role: Roles, permission: keyof Permissions): boolean {
This declares a function named hasPermission.
It takes two parameters:
role: This parameter is of type Roles, which represents the role for which we want to check permissions.
permission: This parameter is of type keyof Permissions, which represents the specific permission we want to check for the given role.
The function returns a boolean value indicating whether the specified role has the specified permission.
Retrieving Permissions:

typescript

const permissions = rolePermissions[role];
This line retrieves the permissions object corresponding to the provided role from the rolePermissions object.
rolePermissions[role] returns the permissions object associated with the provided role.
Checking Permission:

typescript

return permissions ? permissions[permission] || false : false;
This line checks whether the permissions object exists (i.e., it's not undefined or null).
If permissions exists, it checks whether the specified permission exists in the permissions object.
If the permission exists, it returns its boolean value (true or false). If it doesn't exist, it returns false.
If permissions doesn't exist (i.e., the provided role doesn't have associated permissions), it returns false.




// function hasPermission(roles: string,Permissions:any) :any{

// if(roles in Permissions){
//    rolePermissions [roles][rolePermissions] || false
// }
   
//    return false
// }

// console.log()
*/ 
