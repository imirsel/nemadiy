var data = [
[{o: 0.192, f: 38.222, l: "A", a: 0},
{o: 38.222, f: 76.233, l: "B", a: 1},
{o: 76.233, f: 114.608, l: "B", a: 0},
{o: 114.608, f: 152.602, l: "C", a: 1},
{o: 152.602, f: 190.87, l: "B", a: 0},
{o: 190.87, f: 228.588, l: "C", a: 1},
{o: 228.588, f: 266.272, l: "C", a: 0},
{o: 266.272, f: 310.054, l: "C", a: 1}],
[{o: 0.164, f: 8.164, l: "A", a: 0},
{o: 8.164, f: 22.036, l: "E", a: 1},
{o: 22.036, f: 35.668, l: "C", a: 0},
{o: 35.668, f: 49.692, l: "E", a: 1},
{o: 49.692, f: 64.84, l: "E", a: 0},
{o: 64.84, f: 75.82, l: "E", a: 1},
{o: 75.82, f: 87.808, l: "E", a: 0},
{o: 87.808, f: 112.312, l: "E", a: 1},
{o: 112.312, f: 136.56, l: "C", a: 0},
{o: 136.56, f: 149.872, l: "C", a: 1},
{o: 149.872, f: 169.772, l: "E", a: 0},
{o: 169.772, f: 189.568, l: "E", a: 1},
{o: 189.568, f: 204.412, l: "B", a: 0},
{o: 204.412, f: 226.304, l: "D", a: 1},
{o: 226.304, f: 236.08, l: "C", a: 0},
{o: 236.08, f: 249.06, l: "C", a: 1},
{o: 249.06, f: 265.032, l: "C", a: 0},
{o: 265.032, f: 276.748, l: "C", a: 1},
{o: 276.748, f: 287.348, l: "C", a: 0},
{o: 287.348, f: 301.892, l: "C", a: 1}],
[{o: 0.164, f: 8.164, l: "F", a: 0},
{o: 8.164, f: 22.036, l: "E", a: 1},
{o: 22.036, f: 35.668, l: "G", a: 0},
{o: 35.668, f: 49.692, l: "B", a: 1},
{o: 49.692, f: 64.84, l: "B", a: 0},
{o: 64.84, f: 75.82, l: "B", a: 1},
{o: 75.82, f: 87.808, l: "E", a: 0},
{o: 87.808, f: 112.312, l: "H", a: 1},
{o: 112.312, f: 136.56, l: "C", a: 0},
{o: 136.56, f: 149.872, l: "A", a: 1},
{o: 149.872, f: 169.772, l: "B", a: 0},
{o: 169.772, f: 189.568, l: "I", a: 1},
{o: 189.568, f: 204.412, l: "J", a: 0},
{o: 204.412, f: 226.304, l: "K", a: 1},
{o: 226.304, f: 236.08, l: "D", a: 0},
{o: 236.08, f: 249.06, l: "D", a: 1},
{o: 249.06, f: 265.032, l: "A", a: 0},
{o: 265.032, f: 276.748, l: "C", a: 1},
{o: 276.748, f: 287.348, l: "C", a: 0},
{o: 287.348, f: 301.892, l: "A", a: 1}],
[{o: 0.76, f: 8.16, l: "2", a: 0},
{o: 8.16, f: 37.8, l: "1", a: 1},
{o: 37.8, f: 76.48, l: "4", a: 0},
{o: 76.48, f: 111.133, l: "1", a: 1},
{o: 111.133, f: 122.52, l: "3", a: 0},
{o: 122.52, f: 129.68, l: "8", a: 1},
{o: 129.68, f: 152.267, l: "3", a: 0},
{o: 152.267, f: 169.493, l: "4", a: 1},
{o: 169.493, f: 187.213, l: "1", a: 0},
{o: 187.213, f: 198.48, l: "5", a: 1},
{o: 198.48, f: 205.613, l: "7", a: 0},
{o: 205.613, f: 211.52, l: "5", a: 1},
{o: 211.52, f: 225.107, l: "1", a: 0},
{o: 225.107, f: 252.92, l: "2", a: 1},
{o: 252.92, f: 267.053, l: "3", a: 0},
{o: 267.053, f: 287.627, l: "2", a: 1},
{o: 287.627, f: 299.44, l: "1", a: 0},
{o: 299.44, f: 309.933, l: "6", a: 1}],
[{o: 0, f: 27.565, l: "a", a: 0},
{o: 27.565, f: 64.815, l: "b", a: 1},
{o: 64.815, f: 102.81, l: "b", a: 0},
{o: 102.81, f: 151.98, l: "c", a: 1},
{o: 151.98, f: 179.545, l: "a", a: 0},
{o: 179.545, f: 216.795, l: "b", a: 1},
{o: 216.795, f: 254.79, l: "b", a: 0},
{o: 254.79, f: 309.92, l: "c", a: 1}],
[{o: 0, f: 0.511, l: "n1", a: 0},
{o: 0.511, f: 31.266, l: "A", a: 1},
{o: 31.266, f: 38.406, l: "n2", a: 0},
{o: 38.406, f: 69.323, l: "A", a: 1},
{o: 69.323, f: 76.463, l: "n3", a: 0},
{o: 76.463, f: 107.532, l: "A", a: 1},
{o: 107.532, f: 114.799, l: "n4", a: 0},
{o: 114.799, f: 145.786, l: "A", a: 1},
{o: 145.786, f: 152.88, l: "n5", a: 0},
{o: 152.88, f: 183.716, l: "A", a: 1},
{o: 183.716, f: 190.798, l: "n6", a: 0},
{o: 190.798, f: 221.611, l: "A", a: 1},
{o: 221.611, f: 232.246, l: "C", a: 0},
{o: 232.246, f: 247.293, l: "n7", a: 1},
{o: 247.293, f: 255.605, l: "B", a: 0},
{o: 255.605, f: 259.437, l: "n8", a: 1},
{o: 259.437, f: 270.919, l: "C", a: 0},
{o: 270.919, f: 279.139, l: "B", a: 1},
{o: 279.139, f: 285.025, l: "n10", a: 0},
{o: 285.025, f: 293.245, l: "B", a: 1},
{o: 293.245, f: 309.894, l: "n11", a: 0}],
[{o: 0, f: 0.016, l: "E", a: 0},
{o: 0.016, f: 20.852, l: "B", a: 1},
{o: 20.852, f: 36.3, l: "D", a: 0},
{o: 36.3, f: 66.316, l: "C", a: 1},
{o: 66.316, f: 93.464, l: "B", a: 0},
{o: 93.464, f: 111.096, l: "D", a: 1},
{o: 111.096, f: 139.224, l: "B", a: 0},
{o: 139.224, f: 186.912, l: "D", a: 1},
{o: 186.912, f: 289.988, l: "B", a: 0},
{o: 289.988, f: 301.864, l: "D", a: 1},
{o: 301.864, f: 310.048, l: "E", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000544.ogg";

var artist = "J J Cale";

var track = "Sensitive Kind";
