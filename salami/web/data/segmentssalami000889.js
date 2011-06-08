var data = [
[{o: 0, f: 44.422, l: "A", a: 0},
{o: 44.422, f: 73.452, l: "A", a: 1},
{o: 73.452, f: 88.166, l: "B", a: 0},
{o: 88.166, f: 132.051, l: "A", a: 1},
{o: 132.051, f: 149.01, l: "B'", a: 0},
{o: 149.01, f: 192.616, l: "C", a: 1},
{o: 192.616, f: 252.169, l: "D", a: 0},
{o: 252.169, f: 302.416, l: "D", a: 1},
{o: 302.416, f: 369.829, l: "D", a: 0},
{o: 369.829, f: 374.648, l: "Z", a: 1}],
[{o: 0.084, f: 13.572, l: "D", a: 0},
{o: 13.572, f: 29.408, l: "D", a: 1},
{o: 29.408, f: 44.884, l: "D", a: 0},
{o: 44.884, f: 58.112, l: "D", a: 1},
{o: 58.112, f: 68.004, l: "D", a: 0},
{o: 68.004, f: 87.264, l: "D", a: 1},
{o: 87.264, f: 101.86, l: "D", a: 0},
{o: 101.86, f: 119.716, l: "D", a: 1},
{o: 119.716, f: 132.464, l: "D", a: 0},
{o: 132.464, f: 146.504, l: "D", a: 1},
{o: 146.504, f: 160.476, l: "D", a: 0},
{o: 160.476, f: 171.876, l: "D", a: 1},
{o: 171.876, f: 195.244, l: "D", a: 0},
{o: 195.244, f: 210.012, l: "D", a: 1},
{o: 210.012, f: 222.064, l: "D", a: 0},
{o: 222.064, f: 243.116, l: "D", a: 1},
{o: 243.116, f: 254.88, l: "F", a: 0},
{o: 254.88, f: 272.256, l: "F", a: 1},
{o: 272.256, f: 288.972, l: "B", a: 0},
{o: 288.972, f: 304.14, l: "B", a: 1},
{o: 304.14, f: 312.16, l: "B", a: 0},
{o: 312.16, f: 327.808, l: "B", a: 1},
{o: 327.808, f: 346.108, l: "B", a: 0},
{o: 346.108, f: 355.948, l: "G", a: 1},
{o: 355.948, f: 366.628, l: "G", a: 0},
{o: 366.628, f: 374.512, l: "G", a: 1}],
[{o: 0.084, f: 13.572, l: "F", a: 0},
{o: 13.572, f: 29.408, l: "G", a: 1},
{o: 29.408, f: 44.884, l: "A", a: 0},
{o: 44.884, f: 58.112, l: "A", a: 1},
{o: 58.112, f: 68.004, l: "H", a: 0},
{o: 68.004, f: 87.264, l: "D", a: 1},
{o: 87.264, f: 101.86, l: "E", a: 0},
{o: 101.86, f: 119.716, l: "E", a: 1},
{o: 119.716, f: 132.464, l: "D", a: 0},
{o: 132.464, f: 146.504, l: "D", a: 1},
{o: 146.504, f: 160.476, l: "D", a: 0},
{o: 160.476, f: 171.876, l: "D", a: 1},
{o: 171.876, f: 195.244, l: "D", a: 0},
{o: 195.244, f: 210.012, l: "C", a: 1},
{o: 210.012, f: 222.064, l: "C", a: 0},
{o: 222.064, f: 243.116, l: "C", a: 1},
{o: 243.116, f: 254.88, l: "I", a: 0},
{o: 254.88, f: 272.256, l: "J", a: 1},
{o: 272.256, f: 288.972, l: "B", a: 0},
{o: 288.972, f: 304.14, l: "B", a: 1},
{o: 304.14, f: 312.16, l: "B", a: 0},
{o: 312.16, f: 327.808, l: "B", a: 1},
{o: 327.808, f: 346.108, l: "B", a: 0},
{o: 346.108, f: 355.948, l: "K", a: 1},
{o: 355.948, f: 366.628, l: "L", a: 0},
{o: 366.628, f: 374.512, l: "M", a: 1}],
[{o: 0.547, f: 15.627, l: "4", a: 0},
{o: 15.627, f: 71.84, l: "1", a: 1},
{o: 71.84, f: 87.52, l: "3", a: 0},
{o: 87.52, f: 130.427, l: "1", a: 1},
{o: 130.427, f: 148.747, l: "3", a: 0},
{o: 148.747, f: 191.507, l: "1", a: 1},
{o: 191.507, f: 251.707, l: "2", a: 0},
{o: 251.707, f: 267.107, l: "5", a: 1},
{o: 267.107, f: 351.387, l: "2", a: 0},
{o: 351.387, f: 359.093, l: "7", a: 1},
{o: 359.093, f: 368.613, l: "6", a: 0},
{o: 368.613, f: 374.44, l: "8", a: 1}],
[{o: 0, f: 43.955, l: "a", a: 0},
{o: 43.955, f: 82.695, l: "a", a: 1},
{o: 82.695, f: 121.435, l: "a", a: 0},
{o: 121.435, f: 183.27, l: "a", a: 1},
{o: 183.27, f: 231.695, l: "b", a: 0},
{o: 231.695, f: 272.67, l: "b", a: 1},
{o: 272.67, f: 321.095, l: "b", a: 0},
{o: 321.095, f: 353.875, l: "b", a: 1},
{o: 353.875, f: 374.735, l: "c", a: 0}],
[{o: 0, f: 21.757, l: "n1", a: 0},
{o: 21.757, f: 36.281, l: "B", a: 1},
{o: 36.281, f: 49.075, l: "B", a: 0},
{o: 49.075, f: 58.154, l: "n3", a: 1},
{o: 58.154, f: 71.181, l: "B", a: 0},
{o: 71.181, f: 85.914, l: "D", a: 1},
{o: 85.914, f: 94.621, l: "n5", a: 0},
{o: 94.621, f: 107.427, l: "B", a: 1},
{o: 107.427, f: 116.553, l: "n6", a: 0},
{o: 116.553, f: 129.765, l: "B", a: 1},
{o: 129.765, f: 143.372, l: "D", a: 0},
{o: 143.372, f: 151.417, l: "n8", a: 1},
{o: 151.417, f: 162.354, l: "C", a: 0},
{o: 162.354, f: 173.267, l: "C", a: 1},
{o: 173.267, f: 184.169, l: "C", a: 0},
{o: 184.169, f: 192.644, l: "C", a: 1},
{o: 192.644, f: 202.675, l: "A", a: 0},
{o: 202.675, f: 212.683, l: "A", a: 1},
{o: 212.683, f: 217.687, l: "n12", a: 0},
{o: 217.687, f: 227.602, l: "A", a: 1},
{o: 227.602, f: 232.536, l: "n13", a: 0},
{o: 232.536, f: 242.347, l: "A", a: 1},
{o: 242.347, f: 252.227, l: "n14", a: 0},
{o: 252.227, f: 262.235, l: "A", a: 1},
{o: 262.235, f: 272.3, l: "n15", a: 0},
{o: 272.3, f: 282.285, l: "A", a: 1},
{o: 282.285, f: 287.277, l: "n16", a: 0},
{o: 287.277, f: 297.332, l: "A", a: 1},
{o: 297.332, f: 307.479, l: "A", a: 0},
{o: 307.479, f: 317.614, l: "n17", a: 1},
{o: 317.614, f: 327.692, l: "A", a: 0},
{o: 327.692, f: 332.765, l: "n18", a: 1},
{o: 332.765, f: 343.052, l: "A", a: 0},
{o: 343.052, f: 359.758, l: "n19", a: 1},
{o: 359.758, f: 374.538, l: "B", a: 0}],
[{o: 0, f: 0.092, l: "F", a: 0},
{o: 0.092, f: 54.04, l: "B", a: 1},
{o: 54.04, f: 72.284, l: "E", a: 0},
{o: 72.284, f: 87.028, l: "A", a: 1},
{o: 87.028, f: 124.952, l: "B", a: 0},
{o: 124.952, f: 147.196, l: "A", a: 1},
{o: 147.196, f: 192.48, l: "B", a: 0},
{o: 192.48, f: 365.152, l: "C", a: 1},
{o: 365.152, f: 374.512, l: "E", a: 0},
{o: 374.512, f: 374.56, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000889.ogg";

var artist = "Ubiquitone";

var track = "Meatball";
