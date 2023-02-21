

let column_1 = [3,
    5,
    6,
    8,
    2,
    6,
    2,
    6,
    2,
    8,
    9,
    6,
    3,
    5,
    9,
    1,
    2,
    4,
    8,
    9,
    3,
    5,
    6,
    8,
    1,
    6,
    2,
    8,
    9,
    8];
let column_2 = [9,
    4,
    7,
    1,
    3,
    8,
    6,
    4,
    2,
    3,
    9,
    7,
    6,
    9,
    2,
    1,
    5,
    9,
    8,
    3,
    5,
    7,1,
    9,
    3,
    4,
    7,
    6,
    4,
    3,];
let column_3 = [46,
    97,
    62,
    69,
    90,
    41,
    53,
    56,
    59,
    56,
    80,
    41,
    89,
    45,
    78,
    90,
    87,
    54,
    45,
    64,
    76,
    97,
    63,
    98,
    62,
    46,
    76,
    82,
    93,
    48];

let column_4 = [98,
    68,
    99,
    84,
    44,
    71,
    43,
    86,
    54,
    78,
    87,
    93,
    54,
    88,
    77,
    43,
    81,
    73,
    50,
    84,
    72,
    64,
    85,
    92,
    63,
    54,
    65,
    98,
    76,
    87];

let sum_1 = 0;
let sum_2 = 0;
let sum_3 = 0;
let sum_4 = 0;


for (let i = 0; i < column_1.length; i++) {
    sum_1 += column_1[i];
}
for (let i = 0; i < column_2.length; i++) {
    sum_2 += column_2[i];
}
for (let i = 0; i < column_3.length; i++) {
    sum_3 += column_3[i];
}
for (let i = 0; i < column_4.length; i++) {
    sum_4 += column_4[i];
}

let sums = [sum_1, sum_2, sum_3, sum_4];

let total_score = 0;
for (let i = 0; i < sums.length; i++) {
    total_score += sums[i];
}

const results = {
    column_1,
    column_2,
    column_3,
    column_4,
    sums,
    total_score
}

console.log(results);