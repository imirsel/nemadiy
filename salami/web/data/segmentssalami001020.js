var data = [
[{o: 0.03, f: 27.735, l: "A", a: 0},
{o: 27.735, f: 48.235, l: "A", a: 1},
{o: 48.235, f: 67.109, l: "B", a: 0},
{o: 67.109, f: 85.296, l: "A", a: 1},
{o: 85.296, f: 105.717, l: "A", a: 0},
{o: 105.717, f: 124.651, l: "B", a: 1},
{o: 124.651, f: 142.975, l: "A", a: 0},
{o: 142.975, f: 239.724, l: "A", a: 1},
{o: 239.724, f: 468.725, l: "A", a: 0},
{o: 468.725, f: 524.934, l: "C", a: 1},
{o: 524.934, f: 544.043, l: "B", a: 0},
{o: 544.043, f: 574.584, l: "Z", a: 1}],
[{o: 0, f: 574.52, l: "A", a: 0}],
[{o: 0, f: 574.52, l: "A", a: 0}],
[{o: 0.707, f: 26.787, l: "2", a: 0},
{o: 26.787, f: 45.147, l: "1", a: 1},
{o: 45.147, f: 67.333, l: "2", a: 0},
{o: 67.333, f: 84.933, l: "3", a: 1},
{o: 84.933, f: 103.187, l: "1", a: 0},
{o: 103.187, f: 124.92, l: "2", a: 1},
{o: 124.92, f: 142.613, l: "3", a: 0},
{o: 142.613, f: 173.707, l: "5", a: 1},
{o: 173.707, f: 239.933, l: "3", a: 0},
{o: 239.933, f: 398.293, l: "1", a: 1},
{o: 398.293, f: 466.693, l: "4", a: 0},
{o: 466.693, f: 542.293, l: "2", a: 1},
{o: 542.293, f: 552.48, l: "7", a: 0},
{o: 552.48, f: 560.32, l: "8", a: 1},
{o: 560.32, f: 574.067, l: "6", a: 0}],
[{o: 0, f: 110.26, l: "a", a: 0},
{o: 110.26, f: 236.165, l: "a", a: 1},
{o: 236.165, f: 346.425, l: "a", a: 0},
{o: 346.425, f: 465.625, l: "a", a: 1},
{o: 465.625, f: 575.14, l: "b", a: 0}],
[{o: 0, f: 2.972, l: "n1", a: 0},
{o: 2.972, f: 13.328, l: "G", a: 1},
{o: 13.328, f: 21.269, l: "A", a: 0},
{o: 21.269, f: 31.637, l: "G", a: 1},
{o: 31.637, f: 39.602, l: "A", a: 0},
{o: 39.602, f: 43.27, l: "n4", a: 1},
{o: 43.27, f: 51.397, l: "F", a: 0},
{o: 51.397, f: 71.007, l: "n5", a: 1},
{o: 71.007, f: 80.097, l: "A", a: 0},
{o: 80.097, f: 88.038, l: "A", a: 1},
{o: 88.038, f: 100.833, l: "n7", a: 0},
{o: 100.833, f: 108.89, l: "F", a: 1},
{o: 108.89, f: 150.43, l: "n8", a: 0},
{o: 150.43, f: 158.128, l: "B", a: 1},
{o: 158.128, f: 177.075, l: "n9", a: 0},
{o: 177.075, f: 184.831, l: "B", a: 1},
{o: 184.831, f: 207.935, l: "n10", a: 0},
{o: 207.935, f: 215.481, l: "B", a: 1},
{o: 215.481, f: 243.566, l: "n11", a: 0},
{o: 243.566, f: 252.413, l: "A", a: 1},
{o: 252.413, f: 264.557, l: "E", a: 0},
{o: 264.557, f: 270.025, l: "n13", a: 1},
{o: 270.025, f: 278.814, l: "A", a: 0},
{o: 278.814, f: 290.842, l: "E", a: 1},
{o: 290.842, f: 296.287, l: "n15", a: 0},
{o: 296.287, f: 303.914, l: "A", a: 1},
{o: 303.914, f: 309.429, l: "n16", a: 0},
{o: 309.429, f: 317.37, l: "A", a: 1},
{o: 317.37, f: 325.068, l: "B", a: 0},
{o: 325.068, f: 330.652, l: "n18", a: 1},
{o: 330.652, f: 340.288, l: "B", a: 0},
{o: 340.288, f: 347.951, l: "A", a: 1},
{o: 347.951, f: 357.541, l: "n20", a: 0},
{o: 357.541, f: 375.269, l: "C", a: 1},
{o: 375.269, f: 383.837, l: "A", a: 0},
{o: 383.837, f: 401.09, l: "C", a: 1},
{o: 401.09, f: 408.985, l: "B", a: 0},
{o: 408.985, f: 480.363, l: "n24", a: 1},
{o: 480.363, f: 489.302, l: "D", a: 0},
{o: 489.302, f: 498.277, l: "D", a: 1},
{o: 498.277, f: 506.114, l: "D", a: 0},
{o: 506.114, f: 574.415, l: "n27", a: 1}],
[{o: 0, f: 0.14, l: "G", a: 0},
{o: 0.14, f: 139.48, l: "F", a: 1},
{o: 139.48, f: 389.048, l: "C", a: 0},
{o: 389.048, f: 436.02, l: "F", a: 1},
{o: 436.02, f: 468.096, l: "C", a: 0},
{o: 468.096, f: 537.004, l: "F", a: 1},
{o: 537.004, f: 574.44, l: "D", a: 0},
{o: 574.44, f: 574.52, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001020.ogg";

var artist = "Zuba";

var track = "The Strut";