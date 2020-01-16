var friends = [ 'Remy', 'Taylor', 'Dookie', 'Heather', 'Falon'
];

var what = 99
i = 0
while (i <= friends.length) {
    console.log(friends[i] + ':');
    while (what>=2) {
        console.log(String(what) + " lines of code in the file, " + String(what) + " lines of code;" + friends[i] + " strikes one out, clears it all out, " + String(what-1) + " lines of code in the file");
        what-=1;
    }
     console.log(" 1 line of code in the file, 1 line of code;" + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
     what = 99;
     i += 1;
 } 


// {
// console.log(i + " lines of code in the file," + i + " lines of code;" + friends + 'strikes one out, clears it all out,');
// i -= 99;
// if (i = 99)
// {
//     break;
// }

// console.log(" 1 line of code on the file, 1 line of code;" + friends + "strikes one out, clears it all out,")

// console.log(i + " lines of code in the file," + i + " lines of code;" + friends + 'strikes one out, clears it all out,')
