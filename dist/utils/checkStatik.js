import fs from "fs";
export function IsStatik(cwd) {
    console.log(cwd);
    if (!fs.existsSync(cwd + "/.statik")) {
        console.error("fatal: .statik folder missing!!!");
        process.exit(1);
    }
}
//# sourceMappingURL=checkStatik.js.map