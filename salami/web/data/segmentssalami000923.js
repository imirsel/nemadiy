var data = [
[{o: 0.395, f: 45.395, l: "A", a: 0},
{o: 45.395, f: 93.741, l: "B", a: 1},
{o: 93.741, f: 125.855, l: "B", a: 0},
{o: 125.855, f: 151.557, l: "C", a: 1},
{o: 151.557, f: 172.58, l: "C", a: 0},
{o: 172.58, f: 193.123, l: "C", a: 1},
{o: 193.123, f: 213.362, l: "C", a: 0},
{o: 213.362, f: 294.613, l: "C'", a: 1}],
[{o: 0.156, f: 11.74, l: "A", a: 0},
{o: 11.74, f: 21.312, l: "D", a: 1},
{o: 21.312, f: 33, l: "D", a: 0},
{o: 33, f: 46.4, l: "D", a: 1},
{o: 46.4, f: 65.596, l: "D", a: 0},
{o: 65.596, f: 83.44, l: "D", a: 1},
{o: 83.44, f: 95.296, l: "D", a: 0},
{o: 95.296, f: 109.092, l: "D", a: 1},
{o: 109.092, f: 132.428, l: "D", a: 0},
{o: 132.428, f: 149.56, l: "D", a: 1},
{o: 149.56, f: 166.692, l: "D", a: 0},
{o: 166.692, f: 178.332, l: "D", a: 1},
{o: 178.332, f: 188.424, l: "D", a: 0},
{o: 188.424, f: 199.864, l: "D", a: 1},
{o: 199.864, f: 210.012, l: "D", a: 0},
{o: 210.012, f: 232.288, l: "D", a: 1},
{o: 232.288, f: 249.984, l: "D", a: 0},
{o: 249.984, f: 265.112, l: "D", a: 1},
{o: 265.112, f: 277.656, l: "D", a: 0},
{o: 277.656, f: 290.924, l: "D", a: 1}],
[{o: 0.156, f: 11.74, l: "E", a: 0},
{o: 11.74, f: 21.312, l: "F", a: 1},
{o: 21.312, f: 33, l: "D", a: 0},
{o: 33, f: 46.4, l: "D", a: 1},
{o: 46.4, f: 65.596, l: "A", a: 0},
{o: 65.596, f: 83.44, l: "A", a: 1},
{o: 83.44, f: 95.296, l: "A", a: 0},
{o: 95.296, f: 109.092, l: "A", a: 1},
{o: 109.092, f: 132.428, l: "A", a: 0},
{o: 132.428, f: 149.56, l: "A", a: 1},
{o: 149.56, f: 166.692, l: "C", a: 0},
{o: 166.692, f: 178.332, l: "C", a: 1},
{o: 178.332, f: 188.424, l: "C", a: 0},
{o: 188.424, f: 199.864, l: "C", a: 1},
{o: 199.864, f: 210.012, l: "C", a: 0},
{o: 210.012, f: 232.288, l: "B", a: 1},
{o: 232.288, f: 249.984, l: "G", a: 0},
{o: 249.984, f: 265.112, l: "H", a: 1},
{o: 265.112, f: 277.656, l: "B", a: 0},
{o: 277.656, f: 290.924, l: "I", a: 1}],
[{o: 0.387, f: 9.507, l: "5", a: 0},
{o: 9.507, f: 15.267, l: "7", a: 1},
{o: 15.267, f: 44.6, l: "4", a: 0},
{o: 44.6, f: 49.347, l: "1", a: 1},
{o: 49.347, f: 54.04, l: "3", a: 0},
{o: 54.04, f: 66.12, l: "2", a: 1},
{o: 66.12, f: 71.16, l: "3", a: 0},
{o: 71.16, f: 79.307, l: "2", a: 1},
{o: 79.307, f: 82.627, l: "3", a: 0},
{o: 82.627, f: 92.84, l: "2", a: 1},
{o: 92.84, f: 96.44, l: "1", a: 0},
{o: 96.44, f: 102.08, l: "3", a: 1},
{o: 102.08, f: 112.48, l: "2", a: 0},
{o: 112.48, f: 125.773, l: "3", a: 1},
{o: 125.773, f: 130.32, l: "2", a: 0},
{o: 130.32, f: 135.88, l: "3", a: 1},
{o: 135.88, f: 139.827, l: "1", a: 0},
{o: 139.827, f: 150.667, l: "2", a: 1},
{o: 150.667, f: 286.76, l: "1", a: 0},
{o: 286.76, f: 292.307, l: "6", a: 1},
{o: 292.307, f: 294.52, l: "8", a: 0}],
[{o: 0, f: 175.075, l: "a", a: 0},
{o: 175.075, f: 185.505, l: "b", a: 1},
{o: 185.505, f: 195.935, l: "b", a: 0},
{o: 195.935, f: 226.48, l: "c", a: 1},
{o: 226.48, f: 253.3, l: "d", a: 0},
{o: 253.3, f: 294.275, l: "d", a: 1}],
[{o: 0, f: 172.037, l: "n1", a: 0},
{o: 172.037, f: 182.37, l: "A", a: 1},
{o: 182.37, f: 192.586, l: "A", a: 0},
{o: 192.586, f: 201.48, l: "A", a: 1},
{o: 201.48, f: 294.29, l: "n4", a: 0}],
[{o: 0, f: 0.32, l: "H", a: 0},
{o: 0.32, f: 11.144, l: "C", a: 1},
{o: 11.144, f: 46.068, l: "G", a: 0},
{o: 46.068, f: 81.96, l: "F", a: 1},
{o: 81.96, f: 175.724, l: "G", a: 0},
{o: 175.724, f: 214.26, l: "C", a: 1},
{o: 214.26, f: 219.628, l: "F", a: 0},
{o: 219.628, f: 255.696, l: "C", a: 1},
{o: 255.696, f: 263.42, l: "G", a: 0},
{o: 263.42, f: 270.492, l: "C", a: 1},
{o: 270.492, f: 279.38, l: "G", a: 0},
{o: 279.38, f: 291.224, l: "C", a: 1},
{o: 291.224, f: 294.61, l: "H", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000923.ogg";

var artist = "Compilations";

var track = "Son de Cuba a Puerto Rico";