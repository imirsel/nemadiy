var data = [
[{o: 0.859, f: 15.06, l: "A", a: 0},
{o: 15.06, f: 33.641, l: "B", a: 1},
{o: 33.641, f: 52.993, l: "B", a: 0},
{o: 52.993, f: 73.922, l: "C", a: 1},
{o: 73.922, f: 94.033, l: "D", a: 0},
{o: 94.033, f: 106.777, l: "A", a: 1},
{o: 106.777, f: 125.577, l: "B", a: 0},
{o: 125.577, f: 145.402, l: "B", a: 1},
{o: 145.402, f: 166.913, l: "C", a: 0},
{o: 166.913, f: 208.388, l: "D'", a: 1},
{o: 208.388, f: 214.362, l: "Z", a: 0}],
[{o: 0, f: 214.571, l: "A", a: 0}],
[{o: 0.132, f: 5.688, l: "E", a: 0},
{o: 5.688, f: 12.512, l: "I", a: 1},
{o: 12.512, f: 18.456, l: "G", a: 0},
{o: 18.456, f: 23.864, l: "A", a: 1},
{o: 23.864, f: 29.252, l: "G", a: 0},
{o: 29.252, f: 34.504, l: "G", a: 1},
{o: 34.504, f: 40.5, l: "A", a: 0},
{o: 40.5, f: 48.492, l: "B", a: 1},
{o: 48.492, f: 53.744, l: "J", a: 0},
{o: 53.744, f: 57.896, l: "G", a: 1},
{o: 57.896, f: 64.624, l: "L", a: 0},
{o: 64.624, f: 70.384, l: "C", a: 1},
{o: 70.384, f: 78.608, l: "G", a: 0},
{o: 78.608, f: 82.748, l: "M", a: 1},
{o: 82.748, f: 91.288, l: "H", a: 0},
{o: 91.288, f: 98.876, l: "G", a: 1},
{o: 98.876, f: 101.672, l: "N", a: 0},
{o: 101.672, f: 104.896, l: "O", a: 1},
{o: 104.896, f: 109.912, l: "G", a: 0},
{o: 109.912, f: 116.428, l: "F", a: 1},
{o: 116.428, f: 119.428, l: "G", a: 0},
{o: 119.428, f: 122.824, l: "K", a: 1},
{o: 122.824, f: 128.976, l: "F", a: 0},
{o: 128.976, f: 135.596, l: "K", a: 1},
{o: 135.596, f: 142.652, l: "B", a: 0},
{o: 142.652, f: 149.82, l: "D", a: 1},
{o: 149.82, f: 155.46, l: "C", a: 0},
{o: 155.46, f: 161.288, l: "D", a: 1},
{o: 161.288, f: 165.204, l: "K", a: 0},
{o: 165.204, f: 171.752, l: "A", a: 1},
{o: 171.752, f: 178.612, l: "D", a: 0},
{o: 178.612, f: 182.432, l: "H", a: 1},
{o: 182.432, f: 187.276, l: "H", a: 0},
{o: 187.276, f: 193.56, l: "K", a: 1},
{o: 193.56, f: 201.108, l: "A", a: 0},
{o: 201.108, f: 206.584, l: "P", a: 1},
{o: 206.584, f: 212.46, l: "H", a: 0}],
[{o: 0.467, f: 12.667, l: "3", a: 0},
{o: 12.667, f: 71.427, l: "1", a: 1},
{o: 71.427, f: 77.773, l: "4", a: 0},
{o: 77.773, f: 94.427, l: "1", a: 1},
{o: 94.427, f: 104.733, l: "3", a: 0},
{o: 104.733, f: 123.88, l: "1", a: 1},
{o: 123.88, f: 147.8, l: "2", a: 0},
{o: 147.8, f: 158.493, l: "1", a: 1},
{o: 158.493, f: 165.507, l: "2", a: 0},
{o: 165.507, f: 172.2, l: "8", a: 1},
{o: 172.2, f: 180.787, l: "2", a: 0},
{o: 180.787, f: 188.253, l: "4", a: 1},
{o: 188.253, f: 196.053, l: "6", a: 0},
{o: 196.053, f: 203.467, l: "7", a: 1},
{o: 203.467, f: 214.467, l: "5", a: 0}],
[{o: 0, f: 35.76, l: "a", a: 0},
{o: 35.76, f: 46.19, l: "b", a: 1},
{o: 46.19, f: 55.875, l: "c", a: 0},
{o: 55.875, f: 77.48, l: "d", a: 1},
{o: 77.48, f: 93.87, l: "e", a: 0},
{o: 93.87, f: 104.3, l: "c", a: 1},
{o: 104.3, f: 128.14, l: "f", a: 0},
{o: 128.14, f: 138.57, l: "b", a: 1},
{o: 138.57, f: 148.255, l: "c", a: 0},
{o: 148.255, f: 171.35, l: "d", a: 1},
{o: 171.35, f: 213.815, l: "g", a: 0}],
[{o: 0, f: 1.765, l: "n1", a: 0},
{o: 1.765, f: 15.848, l: "B", a: 1},
{o: 15.848, f: 31.869, l: "A", a: 0},
{o: 31.869, f: 94.087, l: "n3", a: 1},
{o: 94.087, f: 106.893, l: "B", a: 0},
{o: 106.893, f: 123.321, l: "A", a: 1},
{o: 123.321, f: 214.413, l: "n5", a: 0}],
[{o: 0, f: 0.132, l: "H", a: 0},
{o: 0.132, f: 16.856, l: "G", a: 1},
{o: 16.856, f: 38.276, l: "A", a: 0},
{o: 38.276, f: 44.684, l: "G", a: 1},
{o: 44.684, f: 89.112, l: "A", a: 0},
{o: 89.112, f: 124.128, l: "G", a: 1},
{o: 124.128, f: 130.428, l: "A", a: 0},
{o: 130.428, f: 145.104, l: "G", a: 1},
{o: 145.104, f: 156.952, l: "A", a: 0},
{o: 156.952, f: 186.996, l: "G", a: 1},
{o: 186.996, f: 207.46, l: "A", a: 0},
{o: 207.46, f: 212.46, l: "G", a: 1},
{o: 212.46, f: 214.571, l: "H", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001039.ogg";

var artist = "Compilations";

var track = "Danny Boy";
