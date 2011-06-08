var data = [
[{o: 0.401, f: 40.052, l: "A", a: 0},
{o: 40.052, f: 64.395, l: "B", a: 1},
{o: 64.395, f: 111.038, l: "A", a: 0},
{o: 111.038, f: 256.34, l: "C", a: 1}],
[{o: 0.212, f: 10.416, l: "C", a: 0},
{o: 10.416, f: 19.092, l: "C", a: 1},
{o: 19.092, f: 36.88, l: "C", a: 0},
{o: 36.88, f: 52.016, l: "E", a: 1},
{o: 52.016, f: 63.152, l: "C", a: 0},
{o: 63.152, f: 82.48, l: "C", a: 1},
{o: 82.48, f: 96.76, l: "E", a: 0},
{o: 96.76, f: 107.668, l: "C", a: 1},
{o: 107.668, f: 117.18, l: "E", a: 0},
{o: 117.18, f: 128.332, l: "E", a: 1},
{o: 128.332, f: 147.816, l: "E", a: 0},
{o: 147.816, f: 167.628, l: "C", a: 1},
{o: 167.628, f: 185.732, l: "C", a: 0},
{o: 185.732, f: 204.544, l: "C", a: 1},
{o: 204.544, f: 214.308, l: "C", a: 0},
{o: 214.308, f: 229.052, l: "E", a: 1},
{o: 229.052, f: 239.932, l: "E", a: 0},
{o: 239.932, f: 252.904, l: "E", a: 1}],
[{o: 0.212, f: 10.416, l: "C", a: 0},
{o: 10.416, f: 19.092, l: "C", a: 1},
{o: 19.092, f: 36.88, l: "D", a: 0},
{o: 36.88, f: 52.016, l: "E", a: 1},
{o: 52.016, f: 63.152, l: "F", a: 0},
{o: 63.152, f: 82.48, l: "C", a: 1},
{o: 82.48, f: 96.76, l: "B", a: 0},
{o: 96.76, f: 107.668, l: "D", a: 1},
{o: 107.668, f: 117.18, l: "E", a: 0},
{o: 117.18, f: 128.332, l: "E", a: 1},
{o: 128.332, f: 147.816, l: "E", a: 0},
{o: 147.816, f: 167.628, l: "A", a: 1},
{o: 167.628, f: 185.732, l: "A", a: 0},
{o: 185.732, f: 204.544, l: "F", a: 1},
{o: 204.544, f: 214.308, l: "G", a: 0},
{o: 214.308, f: 229.052, l: "E", a: 1},
{o: 229.052, f: 239.932, l: "E", a: 0},
{o: 239.932, f: 252.904, l: "H", a: 1}],
[{o: 0.2, f: 14, l: "3", a: 0},
{o: 14, f: 23.187, l: "2", a: 1},
{o: 23.187, f: 27.64, l: "6", a: 0},
{o: 27.64, f: 40.2, l: "2", a: 1},
{o: 40.2, f: 61.987, l: "5", a: 0},
{o: 61.987, f: 66.893, l: "8", a: 1},
{o: 66.893, f: 78.373, l: "4", a: 0},
{o: 78.373, f: 88.6, l: "3", a: 1},
{o: 88.6, f: 99.533, l: "2", a: 0},
{o: 99.533, f: 102.307, l: "6", a: 1},
{o: 102.307, f: 110.573, l: "4", a: 0},
{o: 110.573, f: 250.347, l: "1", a: 1},
{o: 250.347, f: 255.907, l: "7", a: 0}],
[{o: 0, f: 15.645, l: "a", a: 0},
{o: 15.645, f: 45.445, l: "b", a: 1},
{o: 45.445, f: 63.325, l: "c", a: 0},
{o: 63.325, f: 93.125, l: "b", a: 1},
{o: 93.125, f: 111.75, l: "d", a: 0},
{o: 111.75, f: 127.395, l: "e", a: 1},
{o: 127.395, f: 146.02, l: "e", a: 0},
{o: 146.02, f: 161.665, l: "e", a: 1},
{o: 161.665, f: 182.525, l: "e", a: 0},
{o: 182.525, f: 198.17, l: "e", a: 1},
{o: 198.17, f: 216.795, l: "e", a: 0},
{o: 216.795, f: 232.44, l: "e", a: 1},
{o: 232.44, f: 255.535, l: "e", a: 0}],
[{o: 0, f: 4.191, l: "n1", a: 0},
{o: 4.191, f: 14.559, l: "C", a: 1},
{o: 14.559, f: 19.574, l: "n2", a: 0},
{o: 19.574, f: 34.621, l: "A", a: 1},
{o: 34.621, f: 45.697, l: "C", a: 0},
{o: 45.697, f: 64.366, l: "n4", a: 1},
{o: 64.366, f: 75.569, l: "A", a: 0},
{o: 75.569, f: 81.084, l: "n5", a: 1},
{o: 81.084, f: 88.596, l: "C", a: 0},
{o: 88.596, f: 111.363, l: "n6", a: 1},
{o: 111.363, f: 130.856, l: "A", a: 0},
{o: 130.856, f: 147.075, l: "A", a: 1},
{o: 147.075, f: 162.749, l: "A", a: 0},
{o: 162.749, f: 169.006, l: "n9", a: 1},
{o: 169.006, f: 186.979, l: "A", a: 0},
{o: 186.979, f: 197.323, l: "B", a: 1},
{o: 197.323, f: 206.762, l: "B", a: 0},
{o: 206.762, f: 219.208, l: "n12", a: 1},
{o: 219.208, f: 234.301, l: "A", a: 0},
{o: 234.301, f: 239.537, l: "n13", a: 1},
{o: 239.537, f: 249.615, l: "B", a: 0},
{o: 249.615, f: 256.023, l: "n14", a: 1}],
[{o: 0, f: 0.212, l: "G", a: 0},
{o: 0.212, f: 14.592, l: "D", a: 1},
{o: 14.592, f: 52.652, l: "C", a: 0},
{o: 52.652, f: 61.9, l: "F", a: 1},
{o: 61.9, f: 105.928, l: "C", a: 0},
{o: 105.928, f: 128.98, l: "A", a: 1},
{o: 128.98, f: 177.464, l: "D", a: 0},
{o: 177.464, f: 251.168, l: "A", a: 1},
{o: 251.168, f: 252.904, l: "B", a: 0},
{o: 252.904, f: 256.341, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001552.ogg";

var artist = "Compilations";

var track = "Genderan Gamelan Gong";
