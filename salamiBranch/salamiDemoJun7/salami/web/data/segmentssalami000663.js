var data = [
[{o: 0.372, f: 53.088, l: "A", a: 0},
{o: 53.088, f: 121.992, l: "A", a: 1},
{o: 121.992, f: 192.865, l: "A", a: 0},
{o: 192.865, f: 264.421, l: "A", a: 1}],
[{o: 0.188, f: 14.448, l: "G", a: 0},
{o: 14.448, f: 27.1, l: "D", a: 1},
{o: 27.1, f: 40.092, l: "A", a: 0},
{o: 40.092, f: 53.108, l: "D", a: 1},
{o: 53.108, f: 64.388, l: "D", a: 0},
{o: 64.388, f: 89.184, l: "D", a: 1},
{o: 89.184, f: 110.224, l: "G", a: 0},
{o: 110.224, f: 120.424, l: "C", a: 1},
{o: 120.424, f: 131.536, l: "D", a: 0},
{o: 131.536, f: 143.596, l: "C", a: 1},
{o: 143.596, f: 157.652, l: "D", a: 0},
{o: 157.652, f: 166.868, l: "D", a: 1},
{o: 166.868, f: 181.452, l: "C", a: 0},
{o: 181.452, f: 191.216, l: "C", a: 1},
{o: 191.216, f: 199.72, l: "C", a: 0},
{o: 199.72, f: 217.928, l: "C", a: 1},
{o: 217.928, f: 227.132, l: "C", a: 0},
{o: 227.132, f: 241.632, l: "C", a: 1},
{o: 241.632, f: 260.208, l: "D", a: 0}],
[{o: 0.188, f: 14.448, l: "G", a: 0},
{o: 14.448, f: 27.1, l: "D", a: 1},
{o: 27.1, f: 40.092, l: "C", a: 0},
{o: 40.092, f: 53.108, l: "B", a: 1},
{o: 53.108, f: 64.388, l: "D", a: 0},
{o: 64.388, f: 89.184, l: "B", a: 1},
{o: 89.184, f: 110.224, l: "G", a: 0},
{o: 110.224, f: 120.424, l: "I", a: 1},
{o: 120.424, f: 131.536, l: "H", a: 0},
{o: 131.536, f: 143.596, l: "F", a: 1},
{o: 143.596, f: 157.652, l: "D", a: 0},
{o: 157.652, f: 166.868, l: "H", a: 1},
{o: 166.868, f: 181.452, l: "A", a: 0},
{o: 181.452, f: 191.216, l: "E", a: 1},
{o: 191.216, f: 199.72, l: "J", a: 0},
{o: 199.72, f: 217.928, l: "A", a: 1},
{o: 217.928, f: 227.132, l: "F", a: 0},
{o: 227.132, f: 241.632, l: "E", a: 1},
{o: 241.632, f: 260.208, l: "D", a: 0}],
[{o: 0.573, f: 9.2, l: "7", a: 0},
{o: 9.2, f: 19.88, l: "4", a: 1},
{o: 19.88, f: 34.827, l: "1", a: 0},
{o: 34.827, f: 46.187, l: "5", a: 1},
{o: 46.187, f: 62.853, l: "4", a: 0},
{o: 62.853, f: 75.107, l: "5", a: 1},
{o: 75.107, f: 81.533, l: "1", a: 0},
{o: 81.533, f: 92.867, l: "3", a: 1},
{o: 92.867, f: 108.44, l: "1", a: 0},
{o: 108.44, f: 118.547, l: "2", a: 1},
{o: 118.547, f: 135.213, l: "6", a: 0},
{o: 135.213, f: 142.08, l: "1", a: 1},
{o: 142.08, f: 170.173, l: "2", a: 0},
{o: 170.173, f: 181.333, l: "3", a: 1},
{o: 181.333, f: 194.04, l: "2", a: 0},
{o: 194.04, f: 202.64, l: "4", a: 1},
{o: 202.64, f: 224.84, l: "3", a: 0},
{o: 224.84, f: 234.093, l: "1", a: 1},
{o: 234.093, f: 246.92, l: "3", a: 0},
{o: 246.92, f: 256.52, l: "2", a: 1},
{o: 256.52, f: 262.12, l: "8", a: 0}],
[{o: 0, f: 26.075, l: "a", a: 0},
{o: 26.075, f: 53.64, l: "b", a: 1},
{o: 53.64, f: 86.42, l: "c", a: 0},
{o: 86.42, f: 163.155, l: "d", a: 1},
{o: 163.155, f: 227.97, l: "d", a: 0},
{o: 227.97, f: 262.24, l: "b", a: 1},
{o: 262.24, f: 263.73, l: "e", a: 0}],
[{o: 0, f: 30.848, l: "n1", a: 0},
{o: 30.848, f: 39.602, l: "C", a: 1},
{o: 39.602, f: 72.609, l: "n2", a: 0},
{o: 72.609, f: 82.326, l: "A", a: 1},
{o: 82.326, f: 94.227, l: "n3", a: 0},
{o: 94.227, f: 103.584, l: "A", a: 1},
{o: 103.584, f: 152.335, l: "n4", a: 0},
{o: 152.335, f: 160.856, l: "B", a: 1},
{o: 160.856, f: 170.771, l: "B", a: 0},
{o: 170.771, f: 181.243, l: "C", a: 1},
{o: 181.243, f: 190.079, l: "B", a: 0},
{o: 190.079, f: 226.174, l: "n8", a: 1},
{o: 226.174, f: 235.23, l: "A", a: 0},
{o: 235.23, f: 264.197, l: "n9", a: 1}],
[{o: 0, f: 0.188, l: "H", a: 0},
{o: 0.188, f: 23.096, l: "C", a: 1},
{o: 23.096, f: 186.204, l: "G", a: 0},
{o: 186.204, f: 257.328, l: "B", a: 1},
{o: 257.328, f: 260.208, l: "C", a: 0},
{o: 260.208, f: 264.412, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000663.ogg";
