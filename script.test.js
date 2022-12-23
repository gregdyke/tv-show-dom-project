const fs = require("fs");
const { JSDOM } = require("jsdom");

const scriptSource = fs.readFileSync("script.js");

let window;
beforeEach(() => {
  window = (new JSDOM(``, { runScripts: "dangerously" })).window;

  // prepare document to be the same as index.html
  const rootElement = window.document.createElement("div");
  rootElement.id = "root";
  window.document.body.appendChild(rootElement);

  // Execute scriptSource by inserting a <script> tag containing it.
  const scriptElement = window.document.createElement("script");
  scriptElement.textContent = scriptSource;
  window.document.body.appendChild(scriptElement);
});

describe("100: Episode code", () => {
    it("adds zeros for single digit season/episode", () => {
        expect(window.makeEpisodeCode({season: 1, number: 1})).toBe("S01E01");
    });

    it("adds zeros for single digit season/double digit episode", () => {
        expect(window.makeEpisodeCode({season: 1, number: 10})).toBe("S01E10");
    });

    it("adds zeros for double digit season/single digit episode", () => {
        expect(window.makeEpisodeCode({season: 10, number: 1})).toBe("S10E01");
    });

    it("adds zeros for double digit season/episode", () => {
        expect(window.makeEpisodeCode({season: 11, number: 11})).toBe("S11E11");
    });
});