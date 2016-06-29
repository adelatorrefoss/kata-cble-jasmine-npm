function wrap(text, width){
    //var
    var wrappedText = text.substring(0,width);
    wrappedText += "\n";
    wrappedText += text.substring(width);

    return wrappedText;
}

describe("The word wrap", function(){

    it("splits the line when longer than desired width", function(){
    expect(wrap("castillo", 5)).toBe("casti\nllo");
        expect(wrap("zoco", 2)).toBe("zo\nco");
    });

    it("splits the line by space when possible", function() {
        expect(wrap("hola rosa", 6)).toBe("hola\nrosa");
    });
});

