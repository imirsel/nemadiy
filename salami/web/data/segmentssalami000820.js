var data = [
[{o: 0.212, f: 44.873, l: "A", a: 0},
{o: 44.873, f: 88.664, l: "B", a: 1},
{o: 88.664, f: 110.44, l: "A", a: 0},
{o: 110.44, f: 154.554, l: "C", a: 1},
{o: 154.554, f: 201.769, l: "D", a: 0},
{o: 201.769, f: 221.313, l: "Z", a: 1}],
[{o: 0.032, f: 9.128, l: "B", a: 0},
{o: 9.128, f: 23.34, l: "B", a: 1},
{o: 23.34, f: 31.308, l: "B", a: 0},
{o: 31.308, f: 45.144, l: "B", a: 1},
{o: 45.144, f: 66.708, l: "B", a: 0},
{o: 66.708, f: 79.372, l: "B", a: 1},
{o: 79.372, f: 89.632, l: "B", a: 0},
{o: 89.632, f: 97.112, l: "B", a: 1},
{o: 97.112, f: 110.98, l: "B", a: 0},
{o: 110.98, f: 131.264, l: "B", a: 1},
{o: 131.264, f: 142.544, l: "B", a: 0},
{o: 142.544, f: 153.368, l: "B", a: 1},
{o: 153.368, f: 167.836, l: "B", a: 0},
{o: 167.836, f: 175.712, l: "B", a: 1},
{o: 175.712, f: 189.032, l: "B", a: 0},
{o: 189.032, f: 197.984, l: "B", a: 1},
{o: 197.984, f: 205.72, l: "B", a: 0},
{o: 205.72, f: 220.592, l: "A", a: 1}],
[{o: 0.032, f: 9.128, l: "E", a: 0},
{o: 9.128, f: 23.34, l: "D", a: 1},
{o: 23.34, f: 31.308, l: "D", a: 0},
{o: 31.308, f: 45.144, l: "D", a: 1},
{o: 45.144, f: 66.708, l: "D", a: 0},
{o: 66.708, f: 79.372, l: "B", a: 1},
{o: 79.372, f: 89.632, l: "D", a: 0},
{o: 89.632, f: 97.112, l: "D", a: 1},
{o: 97.112, f: 110.98, l: "D", a: 0},
{o: 110.98, f: 131.264, l: "C", a: 1},
{o: 131.264, f: 142.544, l: "D", a: 0},
{o: 142.544, f: 153.368, l: "C", a: 1},
{o: 153.368, f: 167.836, l: "F", a: 0},
{o: 167.836, f: 175.712, l: "G", a: 1},
{o: 175.712, f: 189.032, l: "B", a: 0},
{o: 189.032, f: 197.984, l: "A", a: 1},
{o: 197.984, f: 205.72, l: "A", a: 0},
{o: 205.72, f: 220.592, l: "H", a: 1}],
[{o: 0.547, f: 9.293, l: "2", a: 0},
{o: 9.293, f: 16.227, l: "5", a: 1},
{o: 16.227, f: 31.493, l: "2", a: 0},
{o: 31.493, f: 38.08, l: "5", a: 1},
{o: 38.08, f: 43.947, l: "2", a: 0},
{o: 43.947, f: 92.84, l: "1", a: 1},
{o: 92.84, f: 97.227, l: "2", a: 0},
{o: 97.227, f: 103.72, l: "5", a: 1},
{o: 103.72, f: 111.133, l: "2", a: 0},
{o: 111.133, f: 121.6, l: "3", a: 1},
{o: 121.6, f: 129.707, l: "1", a: 0},
{o: 129.707, f: 143.44, l: "3", a: 1},
{o: 143.44, f: 152.493, l: "1", a: 0},
{o: 152.493, f: 157.333, l: "4", a: 1},
{o: 157.333, f: 164.24, l: "1", a: 0},
{o: 164.24, f: 169.733, l: "4", a: 1},
{o: 169.733, f: 175.52, l: "1", a: 0},
{o: 175.52, f: 180.293, l: "4", a: 1},
{o: 180.293, f: 186.8, l: "1", a: 0},
{o: 186.8, f: 191.627, l: "4", a: 1},
{o: 191.627, f: 197.12, l: "3", a: 0},
{o: 197.12, f: 202, l: "7", a: 1},
{o: 202, f: 218.76, l: "6", a: 0},
{o: 218.76, f: 221.213, l: "8", a: 1}],
[{o: 0, f: 22.35, l: "a", a: 0},
{o: 22.35, f: 44.7, l: "a", a: 1},
{o: 44.7, f: 66.305, l: "b", a: 0},
{o: 66.305, f: 88.655, l: "b", a: 1},
{o: 88.655, f: 110.26, l: "a", a: 0},
{o: 110.26, f: 134.1, l: "c", a: 1},
{o: 134.1, f: 156.45, l: "c", a: 0},
{o: 156.45, f: 220.52, l: "d", a: 1}],
[{o: 0, f: 0.569, l: "n1", a: 0},
{o: 0.569, f: 22.686, l: "A", a: 1},
{o: 22.686, f: 44.815, l: "A", a: 0},
{o: 44.815, f: 66.746, l: "C", a: 1},
{o: 66.746, f: 88.445, l: "C", a: 0},
{o: 88.445, f: 110.353, l: "A", a: 1},
{o: 110.353, f: 132.029, l: "D", a: 0},
{o: 132.029, f: 154.099, l: "D", a: 1},
{o: 154.099, f: 176.065, l: "B", a: 0},
{o: 176.065, f: 197.985, l: "B", a: 1},
{o: 197.985, f: 221.1, l: "n6", a: 0}],
[{o: 0, f: 0.12, l: "I", a: 0},
{o: 0.12, f: 11.876, l: "F", a: 1},
{o: 11.876, f: 22.124, l: "G", a: 0},
{o: 22.124, f: 34.1, l: "F", a: 1},
{o: 34.1, f: 47.224, l: "G", a: 0},
{o: 47.224, f: 88.064, l: "H", a: 1},
{o: 88.064, f: 99.812, l: "F", a: 0},
{o: 99.812, f: 109.984, l: "G", a: 1},
{o: 109.984, f: 121.608, l: "H", a: 0},
{o: 121.608, f: 129.68, l: "E", a: 1},
{o: 129.68, f: 143.764, l: "H", a: 0},
{o: 143.764, f: 152.132, l: "E", a: 1},
{o: 152.132, f: 203.876, l: "H", a: 0},
{o: 203.876, f: 209.648, l: "E", a: 1},
{o: 209.648, f: 220.088, l: "D", a: 0},
{o: 220.088, f: 221.31, l: "I", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000820.ogg";

var artist = "Compilations";

var track = "Maple Rag Leaf";
