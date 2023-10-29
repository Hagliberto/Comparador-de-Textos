document.getElementById("compareButton").addEventListener("click", function () {
    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;
    var difference = document.getElementById("difference");

    // Função para comparar os textos e encontrar as diferenças
    function findDifferences(text1, text2) {
        var result = "";
        var minLength = Math.min(text1.length, text2.length);

        for (var i = 0; i < minLength; i++) {
            if (text1[i] !== text2[i]) {
                result += text1[i];
            }
        }

        if (text1.length > minLength) {
            result += text1.substr(minLength);
        } else if (text2.length > minLength) {
            result += text2.substr(minLength);
        }

        return result;
    }

    var diff = findDifferences(text1, text2);
    difference.innerText = diff;
});
