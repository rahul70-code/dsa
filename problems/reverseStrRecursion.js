function reverse(str) {
    if(str.length == 0) return "";
    return reverse(str.substr(1)) + str.charAt(0)
}


console.log(reverse("rahul"))