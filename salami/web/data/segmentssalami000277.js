var data = [
[{o: 0.418, f: 7.893, l: "A", a: 0},
{o: 7.893, f: 27.181, l: "B", a: 1},
{o: 27.181, f: 34.7, l: "E", a: 0},
{o: 34.7, f: 57.935, l: "B", a: 1},
{o: 57.935, f: 65.875, l: "E", a: 0},
{o: 65.875, f: 73.931, l: "B", a: 1},
{o: 73.931, f: 94.422, l: "C", a: 0},
{o: 94.422, f: 122.779, l: "B", a: 1},
{o: 122.779, f: 130.774, l: "E", a: 0},
{o: 130.774, f: 154.82, l: "B", a: 1},
{o: 154.82, f: 162.945, l: "E", a: 0},
{o: 162.945, f: 171.023, l: "B", a: 1},
{o: 171.023, f: 191.676, l: "C", a: 0},
{o: 191.676, f: 205.39, l: "B", a: 1},
{o: 205.39, f: 236.718, l: "B", a: 0}],
[{o: 0.132, f: 8.936, l: "C", a: 0},
{o: 8.936, f: 21.856, l: "C", a: 1},
{o: 21.856, f: 38.6, l: "C", a: 0},
{o: 38.6, f: 54.172, l: "C", a: 1},
{o: 54.172, f: 67.452, l: "C", a: 0},
{o: 67.452, f: 73.524, l: "C", a: 1},
{o: 73.524, f: 81.552, l: "C", a: 0},
{o: 81.552, f: 88.556, l: "C", a: 1},
{o: 88.556, f: 97.4, l: "C", a: 0},
{o: 97.4, f: 103.448, l: "C", a: 1},
{o: 103.448, f: 117.72, l: "C", a: 0},
{o: 117.72, f: 133.672, l: "C", a: 1},
{o: 133.672, f: 146.224, l: "C", a: 0},
{o: 146.224, f: 160.416, l: "C", a: 1},
{o: 160.416, f: 170.948, l: "A", a: 0},
{o: 170.948, f: 181.144, l: "C", a: 1},
{o: 181.144, f: 190.508, l: "C", a: 0},
{o: 190.508, f: 198.556, l: "C", a: 1},
{o: 198.556, f: 210.44, l: "C", a: 0},
{o: 210.44, f: 223.588, l: "C", a: 1}],
[{o: 0.132, f: 8.936, l: "C", a: 0},
{o: 8.936, f: 21.856, l: "A", a: 1},
{o: 21.856, f: 38.6, l: "A", a: 0},
{o: 38.6, f: 54.172, l: "A", a: 1},
{o: 54.172, f: 67.452, l: "A", a: 0},
{o: 67.452, f: 73.524, l: "B", a: 1},
{o: 73.524, f: 81.552, l: "A", a: 0},
{o: 81.552, f: 88.556, l: "A", a: 1},
{o: 88.556, f: 97.4, l: "A", a: 0},
{o: 97.4, f: 103.448, l: "B", a: 1},
{o: 103.448, f: 117.72, l: "A", a: 0},
{o: 117.72, f: 133.672, l: "A", a: 1},
{o: 133.672, f: 146.224, l: "A", a: 0},
{o: 146.224, f: 160.416, l: "D", a: 1},
{o: 160.416, f: 170.948, l: "E", a: 0},
{o: 170.948, f: 181.144, l: "F", a: 1},
{o: 181.144, f: 190.508, l: "G", a: 0},
{o: 190.508, f: 198.556, l: "H", a: 1},
{o: 198.556, f: 210.44, l: "I", a: 0},
{o: 210.44, f: 223.588, l: "C", a: 1}],
[{o: 0.573, f: 24.933, l: "3", a: 0},
{o: 24.933, f: 34.84, l: "1", a: 1},
{o: 34.84, f: 56.747, l: "3", a: 0},
{o: 56.747, f: 66.213, l: "1", a: 1},
{o: 66.213, f: 73.307, l: "2", a: 0},
{o: 73.307, f: 84.347, l: "4", a: 1},
{o: 84.347, f: 96.147, l: "1", a: 0},
{o: 96.147, f: 121, l: "2", a: 1},
{o: 121, f: 130.907, l: "1", a: 0},
{o: 130.907, f: 152.987, l: "2", a: 1},
{o: 152.987, f: 163.2, l: "1", a: 0},
{o: 163.2, f: 170.213, l: "2", a: 1},
{o: 170.213, f: 182.56, l: "4", a: 0},
{o: 182.56, f: 187.653, l: "8", a: 1},
{o: 187.653, f: 197.307, l: "1", a: 0},
{o: 197.307, f: 204.907, l: "6", a: 1},
{o: 204.907, f: 215.48, l: "3", a: 0},
{o: 215.48, f: 232.027, l: "5", a: 1},
{o: 232.027, f: 236.573, l: "7", a: 0}],
[{o: 0, f: 26.82, l: "a", a: 0},
{o: 26.82, f: 56.62, l: "b", a: 1},
{o: 56.62, f: 96.85, l: "c", a: 0},
{o: 96.85, f: 122.925, l: "d", a: 1},
{o: 122.925, f: 152.725, l: "b", a: 0},
{o: 152.725, f: 194.445, l: "c", a: 1},
{o: 194.445, f: 210.835, l: "e", a: 0},
{o: 210.835, f: 233.185, l: "b", a: 1},
{o: 233.185, f: 236.165, l: "f", a: 0}],
[{o: 0, f: 19.423, l: "n1", a: 0},
{o: 19.423, f: 40.612, l: "A", a: 1},
{o: 40.612, f: 50.329, l: "n2", a: 0},
{o: 50.329, f: 72.075, l: "A", a: 1},
{o: 72.075, f: 102.946, l: "B", a: 0},
{o: 102.946, f: 117.261, l: "C", a: 1},
{o: 117.261, f: 131.193, l: "n4", a: 0},
{o: 131.193, f: 146.762, l: "C", a: 1},
{o: 146.762, f: 168.983, l: "A", a: 0},
{o: 168.983, f: 197.579, l: "B", a: 1},
{o: 197.579, f: 206.089, l: "n6", a: 0},
{o: 206.089, f: 221.809, l: "C", a: 1},
{o: 221.809, f: 236.704, l: "n7", a: 0}],
[{o: 0, f: 0.132, l: "G", a: 0},
{o: 0.132, f: 59.008, l: "F", a: 1},
{o: 59.008, f: 96.396, l: "D", a: 0},
{o: 96.396, f: 155.3, l: "C", a: 1},
{o: 155.3, f: 193.876, l: "D", a: 0},
{o: 193.876, f: 223.588, l: "B", a: 1},
{o: 223.588, f: 236.67, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000277.ogg";

var artist = "Gianmaria Testa";

var track = "Na stella";
