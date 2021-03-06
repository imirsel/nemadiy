var data = [
[{o: 0.43, f: 15.933, l: "A", a: 0},
{o: 15.933, f: 31.509, l: "B", a: 1},
{o: 31.509, f: 47.234, l: "B", a: 0},
{o: 47.234, f: 78.693, l: "A", a: 1},
{o: 78.693, f: 94.453, l: "B", a: 0},
{o: 94.453, f: 110.324, l: "B", a: 1},
{o: 110.324, f: 134.79, l: "B'", a: 0}],
[{o: 0.236, f: 10.368, l: "D", a: 0},
{o: 10.368, f: 14.476, l: "D", a: 1},
{o: 14.476, f: 26.824, l: "D", a: 0},
{o: 26.824, f: 32.68, l: "D", a: 1},
{o: 32.68, f: 42.26, l: "D", a: 0},
{o: 42.26, f: 49.64, l: "D", a: 1},
{o: 49.64, f: 59.98, l: "D", a: 0},
{o: 59.98, f: 68.32, l: "D", a: 1},
{o: 68.32, f: 78.344, l: "D", a: 0},
{o: 78.344, f: 89.448, l: "D", a: 1},
{o: 89.448, f: 98.38, l: "D", a: 0},
{o: 98.38, f: 105.308, l: "D", a: 1},
{o: 105.308, f: 119.744, l: "A", a: 0},
{o: 119.744, f: 129.164, l: "A", a: 1}],
[{o: 0.236, f: 10.368, l: "D", a: 0},
{o: 10.368, f: 14.476, l: "A", a: 1},
{o: 14.476, f: 26.824, l: "B", a: 0},
{o: 26.824, f: 32.68, l: "C", a: 1},
{o: 32.68, f: 42.26, l: "B", a: 0},
{o: 42.26, f: 49.64, l: "B", a: 1},
{o: 49.64, f: 59.98, l: "D", a: 0},
{o: 59.98, f: 68.32, l: "B", a: 1},
{o: 68.32, f: 78.344, l: "B", a: 0},
{o: 78.344, f: 89.448, l: "B", a: 1},
{o: 89.448, f: 98.38, l: "C", a: 0},
{o: 98.38, f: 105.308, l: "E", a: 1},
{o: 105.308, f: 119.744, l: "F", a: 0},
{o: 119.744, f: 129.164, l: "G", a: 1}],
[{o: 0.493, f: 1.667, l: "8", a: 0},
{o: 1.667, f: 15.133, l: "5", a: 1},
{o: 15.133, f: 25.853, l: "1", a: 0},
{o: 25.853, f: 32.2, l: "2", a: 1},
{o: 32.2, f: 41.533, l: "1", a: 0},
{o: 41.533, f: 47.44, l: "2", a: 1},
{o: 47.44, f: 57.787, l: "3", a: 0},
{o: 57.787, f: 62.68, l: "6", a: 1},
{o: 62.68, f: 78.36, l: "3", a: 0},
{o: 78.36, f: 88.72, l: "1", a: 1},
{o: 88.72, f: 95.147, l: "2", a: 0},
{o: 95.147, f: 105.08, l: "1", a: 1},
{o: 105.08, f: 130.68, l: "4", a: 0},
{o: 130.68, f: 134.6, l: "7", a: 1}],
[{o: 0, f: 11.175, l: "a", a: 0},
{o: 11.175, f: 18.625, l: "a", a: 1},
{o: 18.625, f: 34.27, l: "b", a: 0},
{o: 34.27, f: 49.915, l: "b", a: 1},
{o: 49.915, f: 65.56, l: "c", a: 0},
{o: 65.56, f: 76.735, l: "a", a: 1},
{o: 76.735, f: 84.185, l: "a", a: 0},
{o: 84.185, f: 98.34, l: "d", a: 1},
{o: 98.34, f: 113.24, l: "b", a: 0},
{o: 113.24, f: 125.16, l: "b", a: 1},
{o: 125.16, f: 132.61, l: "c", a: 0},
{o: 132.61, f: 134.1, l: "e", a: 1}],
[{o: 0, f: 4.4, l: "n1", a: 0},
{o: 4.4, f: 23.719, l: "A", a: 1},
{o: 23.719, f: 39.323, l: "A", a: 0},
{o: 39.323, f: 55.101, l: "A", a: 1},
{o: 55.101, f: 66.873, l: "n3", a: 0},
{o: 66.873, f: 86.506, l: "A", a: 1},
{o: 86.506, f: 102.377, l: "A", a: 0},
{o: 102.377, f: 117.772, l: "A", a: 1},
{o: 117.772, f: 134.536, l: "n5", a: 0}],
[{o: 0, f: 0.236, l: "D", a: 0},
{o: 0.236, f: 17.12, l: "B", a: 1},
{o: 17.12, f: 48.908, l: "C", a: 0},
{o: 48.908, f: 79.84, l: "B", a: 1},
{o: 79.84, f: 112.776, l: "C", a: 0},
{o: 112.776, f: 129.16, l: "A", a: 1},
{o: 129.16, f: 134.733, l: "D", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000437.ogg";
