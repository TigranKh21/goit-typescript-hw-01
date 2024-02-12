import { concatination } from "./concatination";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatination(input.value, "hello!");
    });
}
//# sourceMappingURL=index.js.map