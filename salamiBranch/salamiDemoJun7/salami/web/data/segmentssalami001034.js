var data = [
[{o: 0.048, f: 29.664, l: "A", a: 0},
{o: 29.664, f: 44.415, l: "C", a: 1},
{o: 44.415, f: 88.778, l: "V", a: 0},
{o: 88.778, f: 103.528, l: "C", a: 1},
{o: 103.528, f: 147.826, l: "V", a: 0},
{o: 147.826, f: 177.331, l: "A'", a: 1},
{o: 177.331, f: 221.706, l: "V", a: 0},
{o: 221.706, f: 236.467, l: "C", a: 1},
{o: 236.467, f: 265.076, l: "D", a: 0}],
[{o: 0.012, f: 14.36, l: "E", a: 0},
{o: 14.36, f: 27.252, l: "E", a: 1},
{o: 27.252, f: 42.952, l: "E", a: 0},
{o: 42.952, f: 52.648, l: "E", a: 1},
{o: 52.648, f: 67.432, l: "E", a: 0},
{o: 67.432, f: 82.196, l: "E", a: 1},
{o: 82.196, f: 88.672, l: "E", a: 0},
{o: 88.672, f: 102.072, l: "E", a: 1},
{o: 102.072, f: 110.348, l: "E", a: 0},
{o: 110.348, f: 126.032, l: "E", a: 1},
{o: 126.032, f: 138.94, l: "E", a: 0},
{o: 138.94, f: 149.168, l: "E", a: 1},
{o: 149.168, f: 162.524, l: "A", a: 0},
{o: 162.524, f: 172.224, l: "E", a: 1},
{o: 172.224, f: 181, l: "E", a: 0},
{o: 181, f: 200.392, l: "E", a: 1},
{o: 200.392, f: 209.168, l: "E", a: 0},
{o: 209.168, f: 223.472, l: "B", a: 1},
{o: 223.472, f: 234.116, l: "C", a: 0},
{o: 234.116, f: 244.736, l: "D", a: 1},
{o: 244.736, f: 253.644, l: "A", a: 0},
{o: 253.644, f: 259.528, l: "F", a: 1}],
[{o: 0.012, f: 14.36, l: "E", a: 0},
{o: 14.36, f: 27.252, l: "F", a: 1},
{o: 27.252, f: 42.952, l: "B", a: 0},
{o: 42.952, f: 52.648, l: "C", a: 1},
{o: 52.648, f: 67.432, l: "C", a: 0},
{o: 67.432, f: 82.196, l: "C", a: 1},
{o: 82.196, f: 88.672, l: "A", a: 0},
{o: 88.672, f: 102.072, l: "A", a: 1},
{o: 102.072, f: 110.348, l: "A", a: 0},
{o: 110.348, f: 126.032, l: "D", a: 1},
{o: 126.032, f: 138.94, l: "C", a: 0},
{o: 138.94, f: 149.168, l: "A", a: 1},
{o: 149.168, f: 162.524, l: "G", a: 0},
{o: 162.524, f: 172.224, l: "B", a: 1},
{o: 172.224, f: 181, l: "D", a: 0},
{o: 181, f: 200.392, l: "A", a: 1},
{o: 200.392, f: 209.168, l: "A", a: 0},
{o: 209.168, f: 223.472, l: "H", a: 1},
{o: 223.472, f: 234.116, l: "I", a: 0},
{o: 234.116, f: 244.736, l: "J", a: 1},
{o: 244.736, f: 253.644, l: "K", a: 0},
{o: 253.644, f: 259.528, l: "L", a: 1}],
[{o: 0.52, f: 14.133, l: "4", a: 0},
{o: 14.133, f: 27.04, l: "6", a: 1},
{o: 27.04, f: 42.733, l: "2", a: 0},
{o: 42.733, f: 89.84, l: "1", a: 1},
{o: 89.84, f: 102.307, l: "2", a: 0},
{o: 102.307, f: 148.027, l: "1", a: 1},
{o: 148.027, f: 162.293, l: "3", a: 0},
{o: 162.293, f: 175.227, l: "5", a: 1},
{o: 175.227, f: 222.787, l: "1", a: 0},
{o: 222.787, f: 251.053, l: "2", a: 1},
{o: 251.053, f: 258.973, l: "7", a: 0},
{o: 258.973, f: 264.947, l: "8", a: 1}],
[{o: 0, f: 16.39, l: "a", a: 0},
{o: 16.39, f: 61.835, l: "b", a: 1},
{o: 61.835, f: 106.535, l: "b", a: 0},
{o: 106.535, f: 120.69, l: "c", a: 1},
{o: 120.69, f: 148.255, l: "b", a: 0},
{o: 148.255, f: 208.6, l: "a", a: 1},
{o: 208.6, f: 262.24, l: "b", a: 0},
{o: 262.24, f: 264.475, l: "d", a: 1}],
[{o: 0, f: 0.546, l: "n1", a: 0},
{o: 0.546, f: 20.828, l: "B", a: 1},
{o: 20.828, f: 50.387, l: "A", a: 0},
{o: 50.387, f: 79.9, l: "A", a: 1},
{o: 79.9, f: 109.459, l: "A", a: 0},
{o: 109.459, f: 138.971, l: "A", a: 1},
{o: 138.971, f: 148.259, l: "n2", a: 0},
{o: 148.259, f: 168.577, l: "B", a: 1},
{o: 168.577, f: 175.961, l: "n3", a: 0},
{o: 175.961, f: 205.508, l: "A", a: 1},
{o: 205.508, f: 220.264, l: "n4", a: 0},
{o: 220.264, f: 249.823, l: "A", a: 1},
{o: 249.823, f: 264.94, l: "n5", a: 0}],
[{o: 0, f: 0.008, l: "D", a: 0},
{o: 0.008, f: 14.58, l: "B", a: 1},
{o: 14.58, f: 147.516, l: "C", a: 0},
{o: 147.516, f: 162.076, l: "B", a: 1},
{o: 162.076, f: 244.5, l: "C", a: 0},
{o: 244.5, f: 258.632, l: "A", a: 1},
{o: 258.632, f: 265.066, l: "D", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001034.ogg";
