var data = [
[{o: 0.139, f: 17.402, l: "A", a: 0},
{o: 17.402, f: 43.21, l: "A", a: 1},
{o: 43.21, f: 69.011, l: "A", a: 0},
{o: 69.011, f: 94.778, l: "B", a: 1},
{o: 94.778, f: 120.601, l: "A", a: 0},
{o: 120.601, f: 146.341, l: "B", a: 1},
{o: 146.341, f: 172.088, l: "A", a: 0},
{o: 172.088, f: 223.125, l: "C", a: 1},
{o: 223.125, f: 252.533, l: "A", a: 0},
{o: 252.533, f: 295.5, l: "A", a: 1}],
[{o: 0.048, f: 17.7, l: "C", a: 0},
{o: 17.7, f: 34.612, l: "A", a: 1},
{o: 34.612, f: 56.116, l: "A", a: 0},
{o: 56.116, f: 69.284, l: "A", a: 1},
{o: 69.284, f: 88.108, l: "A", a: 0},
{o: 88.108, f: 107.812, l: "A", a: 1},
{o: 107.812, f: 133.044, l: "A", a: 0},
{o: 133.044, f: 145.836, l: "A", a: 1},
{o: 145.836, f: 165.396, l: "A", a: 0},
{o: 165.396, f: 180.632, l: "C", a: 1},
{o: 180.632, f: 205.324, l: "C", a: 0},
{o: 205.324, f: 222.296, l: "C", a: 1},
{o: 222.296, f: 246.236, l: "B", a: 0},
{o: 246.236, f: 266.98, l: "B", a: 1},
{o: 266.98, f: 291.26, l: "D", a: 0}],
[{o: 0.048, f: 17.7, l: "D", a: 0},
{o: 17.7, f: 34.612, l: "A", a: 1},
{o: 34.612, f: 56.116, l: "A", a: 0},
{o: 56.116, f: 69.284, l: "A", a: 1},
{o: 69.284, f: 88.108, l: "B", a: 0},
{o: 88.108, f: 107.812, l: "A", a: 1},
{o: 107.812, f: 133.044, l: "B", a: 0},
{o: 133.044, f: 145.836, l: "B", a: 1},
{o: 145.836, f: 165.396, l: "A", a: 0},
{o: 165.396, f: 180.632, l: "E", a: 1},
{o: 180.632, f: 205.324, l: "C", a: 0},
{o: 205.324, f: 222.296, l: "C", a: 1},
{o: 222.296, f: 246.236, l: "F", a: 0},
{o: 246.236, f: 266.98, l: "G", a: 1},
{o: 266.98, f: 291.26, l: "H", a: 0}],
[{o: 0.813, f: 5.933, l: "8", a: 0},
{o: 5.933, f: 17.187, l: "4", a: 1},
{o: 17.187, f: 68.76, l: "1", a: 0},
{o: 68.76, f: 92.933, l: "2", a: 1},
{o: 92.933, f: 120.413, l: "1", a: 0},
{o: 120.413, f: 146.707, l: "2", a: 1},
{o: 146.707, f: 165.4, l: "1", a: 0},
{o: 165.4, f: 171.293, l: "3", a: 1},
{o: 171.293, f: 190.493, l: "1", a: 0},
{o: 190.493, f: 197.347, l: "4", a: 1},
{o: 197.347, f: 241.893, l: "1", a: 0},
{o: 241.893, f: 251.667, l: "6", a: 1},
{o: 251.667, f: 278.76, l: "3", a: 0},
{o: 278.76, f: 285.8, l: "7", a: 1},
{o: 285.8, f: 295.347, l: "5", a: 0}],
[{o: 0, f: 35.76, l: "a", a: 0},
{o: 35.76, f: 54.385, l: "a", a: 1},
{o: 54.385, f: 73.01, l: "b", a: 0},
{o: 73.01, f: 131.865, l: "a", a: 1},
{o: 131.865, f: 186.25, l: "a", a: 0},
{o: 186.25, f: 200.405, l: "b", a: 1},
{o: 200.405, f: 236.91, l: "a", a: 0},
{o: 236.91, f: 264.475, l: "c", a: 1},
{o: 264.475, f: 295.02, l: "a", a: 0}],
[{o: 0, f: 0.488, l: "n1", a: 0},
{o: 0.488, f: 17.752, l: "B", a: 1},
{o: 17.752, f: 43.456, l: "A", a: 0},
{o: 43.456, f: 69.323, l: "A", a: 1},
{o: 69.323, f: 95.097, l: "A", a: 0},
{o: 95.097, f: 120.964, l: "A", a: 1},
{o: 120.964, f: 146.692, l: "A", a: 0},
{o: 146.692, f: 172.397, l: "A", a: 1},
{o: 172.397, f: 197.915, l: "A", a: 0},
{o: 197.915, f: 222.319, l: "A", a: 1},
{o: 222.319, f: 252.761, l: "n9", a: 0},
{o: 252.761, f: 270.013, l: "B", a: 1},
{o: 270.013, f: 295.404, l: "n10", a: 0}],
[{o: 0, f: 0.048, l: "F", a: 0},
{o: 0.048, f: 8.048, l: "B", a: 1},
{o: 8.048, f: 291.26, l: "E", a: 0},
{o: 291.26, f: 295.446, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001363.ogg";

var artist = "Compilations";

var track = "Passenger 24";
