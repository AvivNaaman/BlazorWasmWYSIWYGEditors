# Blazor WebAssembly Integration with What-You-See-Is-What-You-Get Editors
In this repository, there are 2 implmentions of javascript-baes WYSIYUG editors: TinyMCE and CKEditor.
Start the application using `dotnet run`
### How it works?
We bind the editors' `onchange` event to a new function, which sets the value of the original `textarea` tag and then calls the onchage event of the `textarea`, so it will be updated right.
