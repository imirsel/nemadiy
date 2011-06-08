var data = [
[{o: 0.885, f: 28.323, l: "A", a: 0},
{o: 28.323, f: 54.425, l: "A", a: 1},
{o: 54.425, f: 80.598, l: "A", a: 0},
{o: 80.598, f: 107.142, l: "A", a: 1},
{o: 107.142, f: 133.902, l: "A", a: 0},
{o: 133.902, f: 160.894, l: "A", a: 1},
{o: 160.894, f: 187.886, l: "A", a: 0},
{o: 187.886, f: 214.918, l: "A", a: 1},
{o: 214.918, f: 241.87, l: "A", a: 0},
{o: 241.87, f: 269.014, l: "A", a: 1},
{o: 269.014, f: 296.206, l: "A", a: 0},
{o: 296.206, f: 323.245, l: "A", a: 1},
{o: 323.245, f: 350.31, l: "A", a: 0},
{o: 350.31, f: 377.374, l: "A", a: 1},
{o: 377.374, f: 404.278, l: "A", a: 0},
{o: 404.278, f: 430.875, l: "A", a: 1},
{o: 430.875, f: 483.714, l: "A", a: 0}],
[{o: 0.16, f: 18.516, l: "G", a: 0},
{o: 18.516, f: 28.788, l: "G", a: 1},
{o: 28.788, f: 37.876, l: "G", a: 0},
{o: 37.876, f: 54.292, l: "G", a: 1},
{o: 54.292, f: 65.124, l: "G", a: 0},
{o: 65.124, f: 85.48, l: "G", a: 1},
{o: 85.48, f: 105.964, l: "G", a: 0},
{o: 105.964, f: 127.116, l: "G", a: 1},
{o: 127.116, f: 146.704, l: "G", a: 0},
{o: 146.704, f: 162.532, l: "G", a: 1},
{o: 162.532, f: 169.852, l: "G", a: 0},
{o: 169.852, f: 187.836, l: "G", a: 1},
{o: 187.836, f: 209.724, l: "G", a: 0},
{o: 209.724, f: 235.132, l: "G", a: 1},
{o: 235.132, f: 251.464, l: "G", a: 0},
{o: 251.464, f: 269, l: "G", a: 1},
{o: 269, f: 284.796, l: "G", a: 0},
{o: 284.796, f: 296.712, l: "G", a: 1},
{o: 296.712, f: 304.644, l: "E", a: 0},
{o: 304.644, f: 314.204, l: "E", a: 1},
{o: 314.204, f: 330.496, l: "E", a: 0},
{o: 330.496, f: 340.676, l: "E", a: 1},
{o: 340.676, f: 353.068, l: "E", a: 0},
{o: 353.068, f: 367.732, l: "E", a: 1},
{o: 367.732, f: 384.552, l: "D", a: 0},
{o: 384.552, f: 392.968, l: "D", a: 1},
{o: 392.968, f: 410.844, l: "G", a: 0},
{o: 410.844, f: 430.248, l: "G", a: 1},
{o: 430.248, f: 441.44, l: "G", a: 0},
{o: 441.44, f: 454.736, l: "B", a: 1},
{o: 454.736, f: 474.756, l: "B", a: 0},
{o: 474.756, f: 481.384, l: "A", a: 1}],
[{o: 0.16, f: 18.516, l: "A", a: 0},
{o: 18.516, f: 28.788, l: "B", a: 1},
{o: 28.788, f: 37.876, l: "F", a: 0},
{o: 37.876, f: 54.292, l: "F", a: 1},
{o: 54.292, f: 65.124, l: "G", a: 0},
{o: 65.124, f: 85.48, l: "G", a: 1},
{o: 85.48, f: 105.964, l: "G", a: 0},
{o: 105.964, f: 127.116, l: "G", a: 1},
{o: 127.116, f: 146.704, l: "G", a: 0},
{o: 146.704, f: 162.532, l: "G", a: 1},
{o: 162.532, f: 169.852, l: "H", a: 0},
{o: 169.852, f: 187.836, l: "C", a: 1},
{o: 187.836, f: 209.724, l: "I", a: 0},
{o: 209.724, f: 235.132, l: "C", a: 1},
{o: 235.132, f: 251.464, l: "C", a: 0},
{o: 251.464, f: 269, l: "C", a: 1},
{o: 269, f: 284.796, l: "C", a: 0},
{o: 284.796, f: 296.712, l: "C", a: 1},
{o: 296.712, f: 304.644, l: "J", a: 0},
{o: 304.644, f: 314.204, l: "E", a: 1},
{o: 314.204, f: 330.496, l: "E", a: 0},
{o: 330.496, f: 340.676, l: "E", a: 1},
{o: 340.676, f: 353.068, l: "E", a: 0},
{o: 353.068, f: 367.732, l: "E", a: 1},
{o: 367.732, f: 384.552, l: "D", a: 0},
{o: 384.552, f: 392.968, l: "D", a: 1},
{o: 392.968, f: 410.844, l: "K", a: 0},
{o: 410.844, f: 430.248, l: "L", a: 1},
{o: 430.248, f: 441.44, l: "M", a: 0},
{o: 441.44, f: 454.736, l: "N", a: 1},
{o: 454.736, f: 474.756, l: "O", a: 0},
{o: 474.756, f: 481.384, l: "P", a: 1}],
[{o: 0.653, f: 2.027, l: "7", a: 0},
{o: 2.027, f: 26.373, l: "1", a: 1},
{o: 26.373, f: 49.627, l: "3", a: 0},
{o: 49.627, f: 78.027, l: "1", a: 1},
{o: 78.027, f: 88, l: "5", a: 0},
{o: 88, f: 147.6, l: "4", a: 1},
{o: 147.6, f: 158.907, l: "1", a: 0},
{o: 158.907, f: 169.573, l: "5", a: 1},
{o: 169.573, f: 187.053, l: "4", a: 0},
{o: 187.053, f: 207.813, l: "5", a: 1},
{o: 207.813, f: 296.453, l: "1", a: 0},
{o: 296.453, f: 304.933, l: "3", a: 1},
{o: 304.933, f: 339.293, l: "2", a: 0},
{o: 339.293, f: 345.52, l: "6", a: 1},
{o: 345.52, f: 375.36, l: "2", a: 0},
{o: 375.36, f: 391.573, l: "6", a: 1},
{o: 391.573, f: 401.653, l: "2", a: 0},
{o: 401.653, f: 417.76, l: "3", a: 1},
{o: 417.76, f: 428.88, l: "2", a: 0},
{o: 428.88, f: 445.027, l: "3", a: 1},
{o: 445.027, f: 452.24, l: "2", a: 0},
{o: 452.24, f: 471.707, l: "7", a: 1},
{o: 471.707, f: 483.587, l: "8", a: 0}],
[{o: 0, f: 49.17, l: "a", a: 0},
{o: 49.17, f: 131.865, l: "b", a: 1},
{o: 131.865, f: 215.305, l: "b", a: 0},
{o: 215.305, f: 430.61, l: "c", a: 1},
{o: 430.61, f: 483.505, l: "a", a: 0}],
[{o: 0, f: 1.892, l: "n1", a: 0},
{o: 1.892, f: 27.806, l: "A", a: 1},
{o: 27.806, f: 53.835, l: "A", a: 0},
{o: 53.835, f: 80.55, l: "A", a: 1},
{o: 80.55, f: 107.102, l: "B", a: 0},
{o: 107.102, f: 133.875, l: "B", a: 1},
{o: 133.875, f: 160.868, l: "B", a: 0},
{o: 160.868, f: 187.861, l: "B", a: 1},
{o: 187.861, f: 214.854, l: "B", a: 0},
{o: 214.854, f: 332.208, l: "n5", a: 1},
{o: 332.208, f: 359.34, l: "C", a: 0},
{o: 359.34, f: 384.035, l: "C", a: 1},
{o: 384.035, f: 403.679, l: "n7", a: 0},
{o: 403.679, f: 430.301, l: "A", a: 1},
{o: 430.301, f: 456.992, l: "A", a: 0},
{o: 456.992, f: 483.393, l: "A", a: 1}],
[{o: 0, f: 0.328, l: "I", a: 0},
{o: 0.328, f: 10.78, l: "H", a: 1},
{o: 10.78, f: 56.828, l: "A", a: 0},
{o: 56.828, f: 187.088, l: "C", a: 1},
{o: 187.088, f: 293.652, l: "E", a: 0},
{o: 293.652, f: 346.528, l: "C", a: 1},
{o: 346.528, f: 386.056, l: "E", a: 0},
{o: 386.056, f: 418.964, l: "B", a: 1},
{o: 418.964, f: 479.516, l: "H", a: 0},
{o: 479.516, f: 480.836, l: "C", a: 1},
{o: 480.836, f: 483.71, l: "I", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000841.ogg";

var artist = "Compilations";

var track = "Back At The Chicken Shack";