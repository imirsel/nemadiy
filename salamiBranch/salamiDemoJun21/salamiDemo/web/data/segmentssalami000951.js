var data = [
[{o: 0.041, f: 11.005, l: "A", a: 0},
{o: 11.005, f: 68.349, l: "B", a: 1},
{o: 68.349, f: 89.003, l: "C", a: 0},
{o: 89.003, f: 143.598, l: "B", a: 1},
{o: 143.598, f: 161.39, l: "C", a: 0},
{o: 161.39, f: 208.114, l: "D", a: 1},
{o: 208.114, f: 237.457, l: "C", a: 0}],
[{o: 0.108, f: 6.892, l: "A", a: 0},
{o: 6.892, f: 18, l: "C", a: 1},
{o: 18, f: 24.772, l: "C", a: 0},
{o: 24.772, f: 35.808, l: "C", a: 1},
{o: 35.808, f: 48.004, l: "C", a: 0},
{o: 48.004, f: 62.812, l: "C", a: 1},
{o: 62.812, f: 69.368, l: "C", a: 0},
{o: 69.368, f: 77.816, l: "C", a: 1},
{o: 77.816, f: 86.948, l: "C", a: 0},
{o: 86.948, f: 101.94, l: "C", a: 1},
{o: 101.94, f: 111.984, l: "B", a: 0},
{o: 111.984, f: 126.008, l: "C", a: 1},
{o: 126.008, f: 138.788, l: "C", a: 0},
{o: 138.788, f: 150.22, l: "C", a: 1},
{o: 150.22, f: 161.204, l: "C", a: 0},
{o: 161.204, f: 173.304, l: "D", a: 1},
{o: 173.304, f: 184.628, l: "E", a: 0},
{o: 184.628, f: 195.984, l: "E", a: 1},
{o: 195.984, f: 207.676, l: "F", a: 0},
{o: 207.676, f: 219.06, l: "C", a: 1},
{o: 219.06, f: 228.224, l: "C", a: 0},
{o: 228.224, f: 237.152, l: "C", a: 1}],
[{o: 0.108, f: 6.892, l: "F", a: 0},
{o: 6.892, f: 18, l: "C", a: 1},
{o: 18, f: 24.772, l: "C", a: 0},
{o: 24.772, f: 35.808, l: "C", a: 1},
{o: 35.808, f: 48.004, l: "C", a: 0},
{o: 48.004, f: 62.812, l: "B", a: 1},
{o: 62.812, f: 69.368, l: "B", a: 0},
{o: 69.368, f: 77.816, l: "B", a: 1},
{o: 77.816, f: 86.948, l: "B", a: 0},
{o: 86.948, f: 101.94, l: "G", a: 1},
{o: 101.94, f: 111.984, l: "H", a: 0},
{o: 111.984, f: 126.008, l: "I", a: 1},
{o: 126.008, f: 138.788, l: "J", a: 0},
{o: 138.788, f: 150.22, l: "A", a: 1},
{o: 150.22, f: 161.204, l: "A", a: 0},
{o: 161.204, f: 173.304, l: "K", a: 1},
{o: 173.304, f: 184.628, l: "E", a: 0},
{o: 184.628, f: 195.984, l: "E", a: 1},
{o: 195.984, f: 207.676, l: "L", a: 0},
{o: 207.676, f: 219.06, l: "D", a: 1},
{o: 219.06, f: 228.224, l: "D", a: 0},
{o: 228.224, f: 237.152, l: "D", a: 1}],
[{o: 0.52, f: 10.787, l: "5", a: 0},
{o: 10.787, f: 27.4, l: "3", a: 1},
{o: 27.4, f: 50.707, l: "2", a: 0},
{o: 50.707, f: 63.027, l: "3", a: 1},
{o: 63.027, f: 85.333, l: "1", a: 0},
{o: 85.333, f: 89.293, l: "8", a: 1},
{o: 89.293, f: 98.92, l: "4", a: 0},
{o: 98.92, f: 135.693, l: "2", a: 1},
{o: 135.693, f: 161.013, l: "1", a: 0},
{o: 161.013, f: 173.133, l: "7", a: 1},
{o: 173.133, f: 196.173, l: "6", a: 0},
{o: 196.173, f: 207.907, l: "4", a: 1},
{o: 207.907, f: 233.933, l: "1", a: 0},
{o: 233.933, f: 237.213, l: "5", a: 1}],
[{o: 0, f: 34.27, l: "a", a: 0},
{o: 34.27, f: 46.19, l: "b", a: 1},
{o: 46.19, f: 58.855, l: "c", a: 0},
{o: 58.855, f: 75.245, l: "d", a: 1},
{o: 75.245, f: 117.71, l: "e", a: 0},
{o: 117.71, f: 129.63, l: "b", a: 1},
{o: 129.63, f: 142.295, l: "c", a: 0},
{o: 142.295, f: 157.94, l: "d", a: 1},
{o: 157.94, f: 175.82, l: "f", a: 0},
{o: 175.82, f: 187.74, l: "c", a: 1},
{o: 187.74, f: 236.91, l: "g", a: 0}],
[{o: 0, f: 236.913, l: "A", a: 0},
{o: 0.07, f: 237.076, l: "A", a: 1}],
[{o: 0, f: 0.064, l: "H", a: 0},
{o: 0.064, f: 10.284, l: "G", a: 1},
{o: 10.284, f: 37.208, l: "A", a: 0},
{o: 37.208, f: 52.704, l: "G", a: 1},
{o: 52.704, f: 62.444, l: "A", a: 0},
{o: 62.444, f: 83.508, l: "B", a: 1},
{o: 83.508, f: 137.504, l: "G", a: 0},
{o: 137.504, f: 167.436, l: "B", a: 1},
{o: 167.436, f: 202.948, l: "G", a: 0},
{o: 202.948, f: 225.508, l: "A", a: 1},
{o: 225.508, f: 237.276, l: "B", a: 0},
{o: 237.276, f: 237.32, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000951.ogg";

var artist = "Goondocks";

var track = "All Live";
