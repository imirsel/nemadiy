var data = [
[{o: 0.739, f: 38.081, l: "N", a: 0},
{o: 38.081, f: 70.146, l: "A", a: 1},
{o: 70.146, f: 94.153, l: "A", a: 0},
{o: 94.153, f: 104.825, l: "B", a: 1},
{o: 104.825, f: 115.521, l: "A", a: 0},
{o: 115.521, f: 158.14, l: "C", a: 1},
{o: 158.14, f: 211.444, l: "D", a: 0},
{o: 211.444, f: 222.125, l: "B", a: 1},
{o: 222.125, f: 243.389, l: "A", a: 0},
{o: 243.389, f: 299.244, l: "E", a: 1},
{o: 299.244, f: 333.966, l: "B", a: 0},
{o: 333.966, f: 365.975, l: "A", a: 1},
{o: 365.975, f: 376.639, l: "B", a: 0},
{o: 376.639, f: 408.706, l: "A", a: 1}],
[{o: 0.004, f: 16.608, l: "A", a: 0},
{o: 16.608, f: 28.972, l: "A", a: 1},
{o: 28.972, f: 38.124, l: "A", a: 0},
{o: 38.124, f: 48.128, l: "D", a: 1},
{o: 48.128, f: 71.468, l: "B", a: 0},
{o: 71.468, f: 96.788, l: "B", a: 1},
{o: 96.788, f: 115.448, l: "C", a: 0},
{o: 115.448, f: 136.776, l: "C", a: 1},
{o: 136.776, f: 158.104, l: "C", a: 0},
{o: 158.104, f: 169.44, l: "B", a: 1},
{o: 169.44, f: 186.776, l: "B", a: 0},
{o: 186.776, f: 204.764, l: "C", a: 1},
{o: 204.764, f: 220.764, l: "C", a: 0},
{o: 220.764, f: 243.416, l: "B", a: 1},
{o: 243.416, f: 266.756, l: "B", a: 0},
{o: 266.756, f: 280.08, l: "B", a: 1},
{o: 280.08, f: 298.9, l: "C", a: 0},
{o: 298.9, f: 315.612, l: "C", a: 1},
{o: 315.612, f: 325.612, l: "C", a: 0},
{o: 325.612, f: 333.604, l: "C", a: 1},
{o: 333.604, f: 349.604, l: "C", a: 0},
{o: 349.604, f: 368.272, l: "B", a: 1},
{o: 368.272, f: 388.272, l: "B", a: 0},
{o: 388.272, f: 407.24, l: "C", a: 1}],
[{o: 0.004, f: 16.608, l: "A", a: 0},
{o: 16.608, f: 28.972, l: "G", a: 1},
{o: 28.972, f: 38.124, l: "H", a: 0},
{o: 38.124, f: 48.128, l: "I", a: 1},
{o: 48.128, f: 71.468, l: "B", a: 0},
{o: 71.468, f: 96.788, l: "B", a: 1},
{o: 96.788, f: 115.448, l: "C", a: 0},
{o: 115.448, f: 136.776, l: "J", a: 1},
{o: 136.776, f: 158.104, l: "K", a: 0},
{o: 158.104, f: 169.44, l: "D", a: 1},
{o: 169.44, f: 186.776, l: "D", a: 0},
{o: 186.776, f: 204.764, l: "E", a: 1},
{o: 204.764, f: 220.764, l: "C", a: 0},
{o: 220.764, f: 243.416, l: "D", a: 1},
{o: 243.416, f: 266.756, l: "D", a: 0},
{o: 266.756, f: 280.08, l: "D", a: 1},
{o: 280.08, f: 298.9, l: "E", a: 0},
{o: 298.9, f: 315.612, l: "L", a: 1},
{o: 315.612, f: 325.612, l: "C", a: 0},
{o: 325.612, f: 333.604, l: "C", a: 1},
{o: 333.604, f: 349.604, l: "F", a: 0},
{o: 349.604, f: 368.272, l: "D", a: 1},
{o: 368.272, f: 388.272, l: "D", a: 0},
{o: 388.272, f: 407.24, l: "F", a: 1}],
[{o: 1.187, f: 5.547, l: "6", a: 0},
{o: 5.547, f: 37.133, l: "5", a: 1},
{o: 37.133, f: 47.8, l: "7", a: 0},
{o: 47.8, f: 94.48, l: "3", a: 1},
{o: 94.48, f: 114.467, l: "1", a: 0},
{o: 114.467, f: 135.787, l: "4", a: 1},
{o: 135.787, f: 156.453, l: "2", a: 0},
{o: 156.453, f: 175.12, l: "3", a: 1},
{o: 175.12, f: 211.787, l: "2", a: 0},
{o: 211.787, f: 221.787, l: "8", a: 1},
{o: 221.787, f: 231.76, l: "1", a: 0},
{o: 231.76, f: 278.427, l: "2", a: 1},
{o: 278.427, f: 298.24, l: "4", a: 0},
{o: 298.24, f: 401.467, l: "1", a: 1},
{o: 401.467, f: 408.573, l: "6", a: 0}],
[{o: 0, f: 53.64, l: "a", a: 0},
{o: 53.64, f: 126.65, l: "b", a: 1},
{o: 126.65, f: 175.075, l: "c", a: 0},
{o: 175.075, f: 214.56, l: "a", a: 1},
{o: 214.56, f: 334.505, l: "d", a: 0},
{o: 334.505, f: 409.005, l: "b", a: 1}],
[{o: 0, f: 8.394, l: "n1", a: 0},
{o: 8.394, f: 18.471, l: "A", a: 1},
{o: 18.471, f: 32.078, l: "n2", a: 0},
{o: 32.078, f: 41.482, l: "A", a: 1},
{o: 41.482, f: 56.181, l: "n3", a: 0},
{o: 56.181, f: 70.832, l: "C", a: 1},
{o: 70.832, f: 77.508, l: "n4", a: 0},
{o: 77.508, f: 92.16, l: "C", a: 1},
{o: 92.16, f: 113.499, l: "n5", a: 0},
{o: 113.499, f: 122.834, l: "A", a: 1},
{o: 122.834, f: 164.142, l: "n6", a: 0},
{o: 164.142, f: 174.811, l: "A", a: 1},
{o: 174.811, f: 184.146, l: "A", a: 0},
{o: 184.146, f: 199.483, l: "n8", a: 1},
{o: 199.483, f: 208.794, l: "A", a: 0},
{o: 208.794, f: 259.123, l: "n9", a: 1},
{o: 259.123, f: 268.458, l: "D", a: 0},
{o: 268.458, f: 306.933, l: "n10", a: 1},
{o: 306.933, f: 316.314, l: "D", a: 0},
{o: 316.314, f: 335.308, l: "n11", a: 1},
{o: 335.308, f: 344.631, l: "B", a: 0},
{o: 344.631, f: 356.647, l: "n12", a: 1},
{o: 356.647, f: 365.97, l: "B", a: 0},
{o: 365.97, f: 377.963, l: "n13", a: 1},
{o: 377.963, f: 387.297, l: "B", a: 0},
{o: 387.297, f: 408.718, l: "n14", a: 1}],
[{o: 0, f: 0.004, l: "G", a: 0},
{o: 0.004, f: 0.552, l: "E", a: 1},
{o: 0.552, f: 48.788, l: "C", a: 0},
{o: 48.788, f: 134.108, l: "F", a: 1},
{o: 134.108, f: 232.104, l: "C", a: 0},
{o: 232.104, f: 249.772, l: "F", a: 1},
{o: 249.772, f: 278.416, l: "B", a: 0},
{o: 278.416, f: 304.556, l: "E", a: 1},
{o: 304.556, f: 334.276, l: "F", a: 0},
{o: 334.276, f: 353.936, l: "B", a: 1},
{o: 353.936, f: 406.492, l: "F", a: 0},
{o: 406.492, f: 408.687, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000393.ogg";

var artist = "Compilations";

var track = "Chaiyya Chaiyya Bollywood Joint";
