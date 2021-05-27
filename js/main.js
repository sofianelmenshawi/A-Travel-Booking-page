function Validate() {

    var Destination = document.forms['myform']['Destination'].value;
    if (Destination == "" || Destination == null) {
        alert("Destination field can't be Empty");
        return false;
    }

    var CheckIn = document.forms['myform']['CheckIn'].value;
    if (CheckIn == "" || CheckIn == null) {
        alert("CheckIn field can't be Empty");
        return false;
    }

    var Checkout = document.forms['myform']['Checkout'].value;
    if (Checkout == "" || Checkout == null) {
        alert("Checkout field can't be Empty");
        return false;
    }

    var guest = document.forms['myform']['guest'].value;
    if (guest == "" || guest == null) {
        alert("No.  of guest  field can't be Empty");
        return false;
    }



}