var data = [
[{o: 0, f: 2.751, l: "Y", a: 0},
{o: 2.751, f: 14.718, l: "A", a: 1},
{o: 14.718, f: 38.62, l: "B", a: 0},
{o: 38.62, f: 50.681, l: "D", a: 1},
{o: 50.681, f: 62.695, l: "A", a: 0},
{o: 62.695, f: 86.726, l: "B", a: 1},
{o: 86.726, f: 98.725, l: "D", a: 0},
{o: 98.725, f: 116.687, l: "F", a: 1},
{o: 116.687, f: 128.734, l: "A", a: 0},
{o: 128.734, f: 152.695, l: "B", a: 1},
{o: 152.695, f: 164.669, l: "D", a: 0},
{o: 164.669, f: 182.654, l: "F", a: 1},
{o: 182.654, f: 206.758, l: "A", a: 0},
{o: 206.758, f: 218.718, l: "D", a: 1},
{o: 218.718, f: 230.71, l: "D", a: 0},
{o: 230.71, f: 260.654, l: "F", a: 1},
{o: 260.654, f: 293.441, l: "A", a: 0}],
[{o: 0.012, f: 12.388, l: "A", a: 0},
{o: 12.388, f: 25.116, l: "D", a: 1},
{o: 25.116, f: 41.648, l: "D", a: 0},
{o: 41.648, f: 51.036, l: "D", a: 1},
{o: 51.036, f: 73.54, l: "D", a: 0},
{o: 73.54, f: 87.412, l: "D", a: 1},
{o: 87.412, f: 97.972, l: "D", a: 0},
{o: 97.972, f: 117.4, l: "D", a: 1},
{o: 117.4, f: 132.78, l: "B", a: 0},
{o: 132.78, f: 148.536, l: "D", a: 1},
{o: 148.536, f: 164.312, l: "D", a: 0},
{o: 164.312, f: 182.644, l: "D", a: 1},
{o: 182.644, f: 205.908, l: "B", a: 0},
{o: 205.908, f: 221.652, l: "D", a: 1},
{o: 221.652, f: 230.66, l: "D", a: 0},
{o: 230.66, f: 241.156, l: "C", a: 1},
{o: 241.156, f: 260.268, l: "D", a: 0},
{o: 260.268, f: 272.244, l: "E", a: 1},
{o: 272.244, f: 286.528, l: "D", a: 0}],
[{o: 0.012, f: 12.388, l: "F", a: 0},
{o: 12.388, f: 25.116, l: "D", a: 1},
{o: 25.116, f: 41.648, l: "B", a: 0},
{o: 41.648, f: 51.036, l: "G", a: 1},
{o: 51.036, f: 73.54, l: "D", a: 0},
{o: 73.54, f: 87.412, l: "B", a: 1},
{o: 87.412, f: 97.972, l: "C", a: 0},
{o: 97.972, f: 117.4, l: "A", a: 1},
{o: 117.4, f: 132.78, l: "H", a: 0},
{o: 132.78, f: 148.536, l: "C", a: 1},
{o: 148.536, f: 164.312, l: "C", a: 0},
{o: 164.312, f: 182.644, l: "A", a: 1},
{o: 182.644, f: 205.908, l: "I", a: 0},
{o: 205.908, f: 221.652, l: "E", a: 1},
{o: 221.652, f: 230.66, l: "E", a: 0},
{o: 230.66, f: 241.156, l: "J", a: 1},
{o: 241.156, f: 260.268, l: "A", a: 0},
{o: 260.268, f: 272.244, l: "K", a: 1},
{o: 272.244, f: 286.528, l: "A", a: 0}],
[{o: 0.387, f: 3.24, l: "5", a: 0},
{o: 3.24, f: 12.6, l: "4", a: 1},
{o: 12.6, f: 20.467, l: "2", a: 0},
{o: 20.467, f: 31.72, l: "3", a: 1},
{o: 31.72, f: 39.213, l: "1", a: 0},
{o: 39.213, f: 46.733, l: "2", a: 1},
{o: 46.733, f: 51.613, l: "1", a: 0},
{o: 51.613, f: 60.6, l: "4", a: 1},
{o: 60.6, f: 79.347, l: "2", a: 0},
{o: 79.347, f: 85.347, l: "1", a: 1},
{o: 85.347, f: 100.36, l: "3", a: 0},
{o: 100.36, f: 110.093, l: "1", a: 1},
{o: 110.093, f: 115.72, l: "2", a: 0},
{o: 115.72, f: 133.733, l: "1", a: 1},
{o: 133.733, f: 137.853, l: "8", a: 0},
{o: 137.853, f: 162.253, l: "1", a: 1},
{o: 162.253, f: 165.96, l: "3", a: 0},
{o: 165.96, f: 229.36, l: "1", a: 1},
{o: 229.36, f: 235.72, l: "5", a: 0},
{o: 235.72, f: 241.72, l: "7", a: 1},
{o: 241.72, f: 284.467, l: "1", a: 0},
{o: 284.467, f: 293.267, l: "6", a: 1}],
[{o: 0, f: 53.64, l: "a", a: 0},
{o: 53.64, f: 100.575, l: "a", a: 1},
{o: 100.575, f: 119.945, l: "b", a: 0},
{o: 119.945, f: 166.88, l: "a", a: 1},
{o: 166.88, f: 186.25, l: "b", a: 0},
{o: 186.25, f: 292.785, l: "c", a: 1}],
[{o: 0, f: 4.214, l: "n1", a: 0},
{o: 4.214, f: 52.198, l: "A", a: 1},
{o: 52.198, f: 100.206, l: "A", a: 0},
{o: 100.206, f: 118.19, l: "B", a: 1},
{o: 118.19, f: 166.185, l: "A", a: 0},
{o: 166.185, f: 184.192, l: "B", a: 1},
{o: 184.192, f: 194.688, l: "n2", a: 0},
{o: 194.688, f: 208.19, l: "C", a: 1},
{o: 208.19, f: 244.193, l: "n3", a: 0},
{o: 244.193, f: 262.188, l: "B", a: 1},
{o: 262.188, f: 272.672, l: "n4", a: 0},
{o: 272.672, f: 286.093, l: "C", a: 1},
{o: 286.093, f: 293.175, l: "n5", a: 0}],
[{o: 0, f: 0.012, l: "G", a: 0},
{o: 0.012, f: 7.172, l: "D", a: 1},
{o: 7.172, f: 33.776, l: "F", a: 0},
{o: 33.776, f: 50.644, l: "A", a: 1},
{o: 50.644, f: 69.78, l: "F", a: 0},
{o: 69.78, f: 81.78, l: "C", a: 1},
{o: 81.78, f: 102.436, l: "A", a: 0},
{o: 102.436, f: 120.768, l: "D", a: 1},
{o: 120.768, f: 135.784, l: "F", a: 0},
{o: 135.784, f: 147.784, l: "C", a: 1},
{o: 147.784, f: 168.396, l: "A", a: 0},
{o: 168.396, f: 186.784, l: "D", a: 1},
{o: 186.784, f: 202.544, l: "F", a: 0},
{o: 202.544, f: 234.412, l: "A", a: 1},
{o: 234.412, f: 268.896, l: "D", a: 0},
{o: 268.896, f: 286.528, l: "C", a: 1},
{o: 286.528, f: 293.4, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001022.ogg";

var artist = "RWC MDB P 2001 M07";

var track = "10";
