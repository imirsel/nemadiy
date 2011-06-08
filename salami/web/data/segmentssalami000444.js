var data = [
[{o: 0.054, f: 5.099, l: "A", a: 0},
{o: 5.099, f: 25.662, l: "B", a: 1},
{o: 25.662, f: 46.231, l: "C", a: 0},
{o: 46.231, f: 66.923, l: "B", a: 1},
{o: 66.923, f: 87.573, l: "C", a: 0},
{o: 87.573, f: 108.198, l: "B", a: 1},
{o: 108.198, f: 128.888, l: "D", a: 0},
{o: 128.888, f: 149.48, l: "B", a: 1},
{o: 149.48, f: 170.207, l: "D", a: 0},
{o: 170.207, f: 221.258, l: "E", a: 1}],
[{o: 0.128, f: 9.484, l: "B", a: 0},
{o: 9.484, f: 24.312, l: "A", a: 1},
{o: 24.312, f: 34.972, l: "A", a: 0},
{o: 34.972, f: 40.776, l: "A", a: 1},
{o: 40.776, f: 47.236, l: "C", a: 0},
{o: 47.236, f: 60.148, l: "A", a: 1},
{o: 60.148, f: 66.896, l: "A", a: 0},
{o: 66.896, f: 77.868, l: "D", a: 1},
{o: 77.868, f: 88.192, l: "A", a: 0},
{o: 88.192, f: 107.544, l: "A", a: 1},
{o: 107.544, f: 118.836, l: "A", a: 0},
{o: 118.836, f: 133.676, l: "A", a: 1},
{o: 133.676, f: 149.16, l: "A", a: 0},
{o: 149.16, f: 157.236, l: "A", a: 1},
{o: 157.236, f: 175.612, l: "A", a: 0},
{o: 175.612, f: 188.832, l: "A", a: 1},
{o: 188.832, f: 203.676, l: "A", a: 0},
{o: 203.676, f: 216.252, l: "A", a: 1}],
[{o: 0.128, f: 9.484, l: "D", a: 0},
{o: 9.484, f: 24.312, l: "A", a: 1},
{o: 24.312, f: 34.972, l: "C", a: 0},
{o: 34.972, f: 40.776, l: "C", a: 1},
{o: 40.776, f: 47.236, l: "E", a: 0},
{o: 47.236, f: 60.148, l: "A", a: 1},
{o: 60.148, f: 66.896, l: "F", a: 0},
{o: 66.896, f: 77.868, l: "G", a: 1},
{o: 77.868, f: 88.192, l: "H", a: 0},
{o: 88.192, f: 107.544, l: "A", a: 1},
{o: 107.544, f: 118.836, l: "I", a: 0},
{o: 118.836, f: 133.676, l: "A", a: 1},
{o: 133.676, f: 149.16, l: "A", a: 0},
{o: 149.16, f: 157.236, l: "J", a: 1},
{o: 157.236, f: 175.612, l: "B", a: 0},
{o: 175.612, f: 188.832, l: "B", a: 1},
{o: 188.832, f: 203.676, l: "B", a: 0},
{o: 203.676, f: 216.252, l: "B", a: 1}],
[{o: 1.107, f: 4.653, l: "8", a: 0},
{o: 4.653, f: 22.707, l: "1", a: 1},
{o: 22.707, f: 40.147, l: "4", a: 0},
{o: 40.147, f: 72.387, l: "1", a: 1},
{o: 72.387, f: 89.16, l: "3", a: 0},
{o: 89.16, f: 122.067, l: "1", a: 1},
{o: 122.067, f: 128.52, l: "3", a: 0},
{o: 128.52, f: 138.84, l: "1", a: 1},
{o: 138.84, f: 148.533, l: "5", a: 0},
{o: 148.533, f: 157.56, l: "6", a: 1},
{o: 157.56, f: 168.52, l: "1", a: 0},
{o: 168.52, f: 213.667, l: "2", a: 1},
{o: 213.667, f: 221, l: "7", a: 0}],
[{o: 0, f: 26.075, l: "a", a: 0},
{o: 26.075, f: 85.675, l: "b", a: 1},
{o: 85.675, f: 108.77, l: "a", a: 0},
{o: 108.77, f: 161.665, l: "c", a: 1},
{o: 161.665, f: 185.505, l: "d", a: 0},
{o: 185.505, f: 220.52, l: "d", a: 1}],
[{o: 0, f: 5.039, l: "n1", a: 0},
{o: 5.039, f: 27.574, l: "A", a: 1},
{o: 27.574, f: 46.301, l: "C", a: 0},
{o: 46.301, f: 68.87, l: "A", a: 1},
{o: 68.87, f: 87.586, l: "C", a: 0},
{o: 87.586, f: 109.517, l: "A", a: 1},
{o: 109.517, f: 170.806, l: "n6", a: 0},
{o: 170.806, f: 183.716, l: "B", a: 1},
{o: 183.716, f: 196.603, l: "B", a: 0},
{o: 196.603, f: 209.514, l: "B", a: 1},
{o: 209.514, f: 221.1, l: "n7", a: 0}],
[{o: 0, f: 0.128, l: "F", a: 0},
{o: 0.128, f: 21.092, l: "D", a: 1},
{o: 21.092, f: 41.096, l: "C", a: 0},
{o: 41.096, f: 62.384, l: "D", a: 1},
{o: 62.384, f: 86.604, l: "C", a: 0},
{o: 86.604, f: 145.624, l: "D", a: 1},
{o: 145.624, f: 177.868, l: "E", a: 0},
{o: 177.868, f: 216.252, l: "A", a: 1},
{o: 216.252, f: 221.147, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000444.ogg";

var artist = "Joss Stone";

var track = "Bad Habit";
