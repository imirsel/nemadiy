var data = [
[{o: 2.972, f: 76.85, l: "A", a: 0},
{o: 76.85, f: 158.656, l: "B", a: 1},
{o: 158.656, f: 203.984, l: "C", a: 0},
{o: 203.984, f: 247.071, l: "D", a: 1},
{o: 247.071, f: 318.378, l: "E", a: 0},
{o: 318.378, f: 365.018, l: "C", a: 1},
{o: 365.018, f: 408.36, l: "D", a: 0},
{o: 408.36, f: 479.575, l: "E", a: 1},
{o: 479.575, f: 923.991, l: "F", a: 0},
{o: 923.991, f: 1005.057, l: "B", a: 1},
{o: 1005.057, f: 1180.92, l: "G", a: 0},
{o: 1180.92, f: 1328.554, l: "F", a: 1},
{o: 1328.554, f: 1406.877, l: "G", a: 0}],
[{o: 0, f: 1406.8, l: "A", a: 0}],
[{o: 0, f: 1406.8, l: "A", a: 0}],
[{o: 0.52, f: 32.133, l: "6", a: 0},
{o: 32.133, f: 93.6, l: "2", a: 1},
{o: 93.6, f: 100.347, l: "8", a: 0},
{o: 100.347, f: 158.373, l: "2", a: 1},
{o: 158.373, f: 203.027, l: "5", a: 0},
{o: 203.027, f: 243.213, l: "3", a: 1},
{o: 243.213, f: 318.88, l: "1", a: 0},
{o: 318.88, f: 364.16, l: "5", a: 1},
{o: 364.16, f: 404, l: "3", a: 0},
{o: 404, f: 628.213, l: "1", a: 1},
{o: 628.213, f: 637.88, l: "4", a: 0},
{o: 637.88, f: 653.84, l: "1", a: 1},
{o: 653.84, f: 924.467, l: "4", a: 0},
{o: 924.467, f: 939.867, l: "2", a: 1},
{o: 939.867, f: 946.627, l: "8", a: 0},
{o: 946.627, f: 1126.507, l: "2", a: 1},
{o: 1126.507, f: 1152.667, l: "3", a: 0},
{o: 1152.667, f: 1179.213, l: "7", a: 1},
{o: 1179.213, f: 1327.253, l: "1", a: 0},
{o: 1327.253, f: 1401.373, l: "3", a: 1}],
[{o: 0, f: 157.94, l: "a", a: 0},
{o: 157.94, f: 320.35, l: "b", a: 1},
{o: 320.35, f: 482.015, l: "b", a: 0},
{o: 482.015, f: 660.07, l: "c", a: 1},
{o: 660.07, f: 778.525, l: "d", a: 0},
{o: 778.525, f: 887.295, l: "d", a: 1},
{o: 887.295, f: 947.64, l: "e", a: 0},
{o: 947.64, f: 1139.85, l: "a", a: 1},
{o: 1139.85, f: 1409.54, l: "f", a: 0}],
[{o: 0, f: 16.393, l: "n1", a: 0},
{o: 16.393, f: 27.574, l: "E", a: 1},
{o: 27.574, f: 32.113, l: "n2", a: 0},
{o: 32.113, f: 41.68, l: "A", a: 1},
{o: 41.68, f: 47.752, l: "n3", a: 0},
{o: 47.752, f: 56.552, l: "A", a: 1},
{o: 56.552, f: 70.229, l: "n4", a: 0},
{o: 70.229, f: 80.759, l: "A", a: 1},
{o: 80.759, f: 90.569, l: "A", a: 0},
{o: 90.569, f: 112.036, l: "n6", a: 1},
{o: 112.036, f: 124.006, l: "A", a: 0},
{o: 124.006, f: 139.122, l: "D", a: 1},
{o: 139.122, f: 154.598, l: "A", a: 0},
{o: 154.598, f: 165.407, l: "A", a: 1},
{o: 165.407, f: 172.13, l: "n10", a: 0},
{o: 172.13, f: 227.126, l: "C", a: 1},
{o: 227.126, f: 247.165, l: "n11", a: 0},
{o: 247.165, f: 266.519, l: "G", a: 1},
{o: 266.519, f: 286.964, l: "n12", a: 0},
{o: 286.964, f: 304.576, l: "F", a: 1},
{o: 304.576, f: 321.26, l: "F", a: 0},
{o: 321.26, f: 378.88, l: "C", a: 1},
{o: 378.88, f: 408.857, l: "n15", a: 0},
{o: 408.857, f: 426.62, l: "G", a: 1},
{o: 426.62, f: 448.563, l: "G", a: 0},
{o: 448.563, f: 461.589, l: "F", a: 1},
{o: 461.589, f: 466.361, l: "n18", a: 0},
{o: 466.361, f: 480.328, l: "F", a: 1},
{o: 480.328, f: 493.9, l: "B", a: 0},
{o: 493.9, f: 498.474, l: "n20", a: 1},
{o: 498.474, f: 516.574, l: "B", a: 0},
{o: 516.574, f: 530.297, l: "B", a: 1},
{o: 530.297, f: 535.673, l: "n22", a: 0},
{o: 535.673, f: 548.304, l: "B", a: 1},
{o: 548.304, f: 558.37, l: "A", a: 0},
{o: 558.37, f: 569.435, l: "n24", a: 1},
{o: 569.435, f: 578.932, l: "A", a: 0},
{o: 578.932, f: 588.568, l: "n25", a: 1},
{o: 588.568, f: 596.637, l: "E", a: 0},
{o: 596.637, f: 600.317, l: "n26", a: 1},
{o: 600.317, f: 612.879, l: "A", a: 0},
{o: 612.879, f: 623.711, l: "A", a: 1},
{o: 623.711, f: 631.885, l: "D", a: 0},
{o: 631.885, f: 660.12, l: "n29", a: 1},
{o: 660.12, f: 671.44, l: "E", a: 0},
{o: 671.44, f: 681.912, l: "A", a: 1},
{o: 681.912, f: 690.109, l: "n31", a: 0},
{o: 690.109, f: 698.607, l: "D", a: 1},
{o: 698.607, f: 705.399, l: "n32", a: 0},
{o: 705.399, f: 713.572, l: "A", a: 1},
{o: 713.572, f: 718.82, l: "n33", a: 0},
{o: 718.82, f: 726.808, l: "A", a: 1},
{o: 726.808, f: 735.353, l: "n34", a: 0},
{o: 735.353, f: 745.407, l: "E", a: 1},
{o: 745.407, f: 752.907, l: "A", a: 0},
{o: 752.907, f: 763.484, l: "n36", a: 1},
{o: 763.484, f: 771.529, l: "A", a: 0},
{o: 771.529, f: 777.044, l: "n37", a: 1},
{o: 777.044, f: 785.508, l: "A", a: 0},
{o: 785.508, f: 790.477, l: "n38", a: 1},
{o: 790.477, f: 801.414, l: "A", a: 0},
{o: 801.414, f: 839.297, l: "n39", a: 1},
{o: 839.297, f: 850.942, l: "A", a: 0},
{o: 850.942, f: 862.11, l: "n40", a: 1},
{o: 862.11, f: 872.304, l: "A", a: 0},
{o: 872.304, f: 885.365, l: "n41", a: 1},
{o: 885.365, f: 896.917, l: "E", a: 0},
{o: 896.917, f: 930.76, l: "n42", a: 1},
{o: 930.76, f: 941.36, l: "A", a: 0},
{o: 941.36, f: 948.233, l: "n43", a: 1},
{o: 948.233, f: 959.82, l: "A", a: 0},
{o: 959.82, f: 970.42, l: "n44", a: 1},
{o: 970.42, f: 983.284, l: "D", a: 0},
{o: 983.284, f: 994.035, l: "A", a: 1},
{o: 994.035, f: 1011.635, l: "n46", a: 0},
{o: 1011.635, f: 1022.351, l: "A", a: 1},
{o: 1022.351, f: 1027.971, l: "n47", a: 0},
{o: 1027.971, f: 1038.095, l: "A", a: 1},
{o: 1038.095, f: 1047.382, l: "n48", a: 0},
{o: 1047.382, f: 1058.853, l: "A", a: 1},
{o: 1058.853, f: 1072.715, l: "n49", a: 0},
{o: 1072.715, f: 1084.929, l: "D", a: 1},
{o: 1084.929, f: 1097.073, l: "A", a: 0},
{o: 1097.073, f: 1107.487, l: "A", a: 1},
{o: 1107.487, f: 1130.603, l: "n52", a: 0},
{o: 1130.603, f: 1139.055, l: "A", a: 1},
{o: 1139.055, f: 1149.365, l: "n53", a: 0},
{o: 1149.365, f: 1157.492, l: "A", a: 1},
{o: 1157.492, f: 1171.76, l: "n54", a: 0},
{o: 1171.76, f: 1181.431, l: "A", a: 1},
{o: 1181.431, f: 1194.771, l: "B", a: 0},
{o: 1194.771, f: 1200.448, l: "n56", a: 1},
{o: 1200.448, f: 1216.784, l: "B", a: 0},
{o: 1216.784, f: 1235.278, l: "B", a: 1},
{o: 1235.278, f: 1249.593, l: "B", a: 0},
{o: 1249.593, f: 1256.977, l: "n59", a: 1},
{o: 1256.977, f: 1269.087, l: "B", a: 0},
{o: 1269.087, f: 1274.358, l: "n60", a: 1},
{o: 1274.358, f: 1291.981, l: "B", a: 0},
{o: 1291.981, f: 1310.105, l: "B", a: 1},
{o: 1310.105, f: 1326.289, l: "B", a: 0},
{o: 1326.289, f: 1336.947, l: "A", a: 1},
{o: 1336.947, f: 1406.618, l: "n64", a: 0}],
[{o: 0, f: 0.38, l: "H", a: 0},
{o: 0.38, f: 3.368, l: "C", a: 1},
{o: 3.368, f: 68.148, l: "F", a: 0},
{o: 68.148, f: 78.048, l: "E", a: 1},
{o: 78.048, f: 202.456, l: "F", a: 0},
{o: 202.456, f: 262.944, l: "E", a: 1},
{o: 262.944, f: 283.768, l: "F", a: 0},
{o: 283.768, f: 290.704, l: "C", a: 1},
{o: 290.704, f: 308.624, l: "F", a: 0},
{o: 308.624, f: 362.528, l: "C", a: 1},
{o: 362.528, f: 441.72, l: "E", a: 0},
{o: 441.72, f: 473.76, l: "F", a: 1},
{o: 473.76, f: 501.436, l: "C", a: 0},
{o: 501.436, f: 508.98, l: "B", a: 1},
{o: 508.98, f: 519.456, l: "F", a: 0},
{o: 519.456, f: 528.844, l: "B", a: 1},
{o: 528.844, f: 537.952, l: "E", a: 0},
{o: 537.952, f: 550.836, l: "B", a: 1},
{o: 550.836, f: 555.8, l: "C", a: 0},
{o: 555.8, f: 912.78, l: "F", a: 1},
{o: 912.78, f: 927.424, l: "A", a: 0},
{o: 927.424, f: 1025.168, l: "F", a: 1},
{o: 1025.168, f: 1030.4, l: "G", a: 0},
{o: 1030.4, f: 1127.324, l: "F", a: 1},
{o: 1127.324, f: 1134.08, l: "E", a: 0},
{o: 1134.08, f: 1142.392, l: "F", a: 1},
{o: 1142.392, f: 1154.008, l: "E", a: 0},
{o: 1154.008, f: 1166.484, l: "D", a: 1},
{o: 1166.484, f: 1193.844, l: "F", a: 0},
{o: 1193.844, f: 1228.424, l: "E", a: 1},
{o: 1228.424, f: 1277.328, l: "F", a: 0},
{o: 1277.328, f: 1285.48, l: "B", a: 1},
{o: 1285.48, f: 1295.5, l: "F", a: 0},
{o: 1295.5, f: 1308.16, l: "B", a: 1},
{o: 1308.16, f: 1321.268, l: "C", a: 0},
{o: 1321.268, f: 1352.076, l: "F", a: 1},
{o: 1352.076, f: 1406.764, l: "E", a: 0},
{o: 1406.764, f: 1406.8, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001620.ogg";

var artist = "Nadja";

var track = "Now I Am Become Death the Destroyer";
