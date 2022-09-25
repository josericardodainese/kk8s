import shelljs from "shelljs";

export const getContexts = () => {
    const command = `kubectl config get-contexts`
    const resultCommand = shelljs.exec(command);

    const splited = resultCommand
        .split('\n');

    const contextList = splited.map((ctx) => ctx.split(' '))

    contextList.pop();
    contextList.shift();

    let clusters = []

    for (let l of contextList) {
        let line = []
        for (let j of l) {
            if(j != '*' && j != '') {
                line.push(j);
            }
        }
        clusters.push({
            name: line[0],
            cluster: line[1],
            authInfo: line[2],
            namespace: line[3]
        })
    }

    return clusters;
}