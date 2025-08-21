import ContainerSkills from "./ContainerSkills";
import BtnSoft from "./BtnSoft";



function Skills() {
    const frontSkills = [
            { name: "React/Next.js", porcentaje: "95%", color: "blue"},
            { name: "Vue.js/Nuxt.js", porcentaje: "90%", color: "blue" },
            { name: "TypeScript", porcentaje: "88%", color: "blue" },
            { name: "TailwindCSS", porcentaje: "85%", color: "blue" },
        ];
        const backSkills = [
            { name: "Node.js", porcentaje: "90%", color: "green" },
            { name: "Python/Django", porcentaje: "85%", color: "green" },
            { name: "PostgreSQL", porcentaje: "88%", color: "green" },
            { name: "MongoDB", porcentaje: "85%", color: "green" },
        ];
        const designSkills = [
            { name: "Docker", porcentaje: "80%", color: "violet" },
            { name: "AWS/GCP", porcentaje: "75%", color: "violet" },
            { name: "Git/GitHub", porcentaje: "95%", color: "violet" },
            { name: "CI/CD", porcentaje: "78%", color: "violet" },
        ];
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center mb-10">
                <h4 className="text-3xl font-bold">Habilidades Técnicas</h4>
                <p className="text-gray-500">Tecnologías y herramientas que domino para crear soluciones completas</p>
            </div>
            <div>
                <ContainerSkills title="Frontend" skills={frontSkills} img="blue" />
                <ContainerSkills title="Backend" skills={backSkills} img="green" />
                <ContainerSkills title="DevOps & Herramientas" skills={designSkills} img="violet" />
            </div>

            <div className="flex flex-col items-center border-1 border-gray-100 rounded-lg shadow-lg w-150 mb-50">
                <p className="text-2xl font-bold mt-5">Herramientas y Software</p>
                <div className="grid grid-cols-3 grid-rows-4 gap-7 mt-5 mb-5">
                    <BtnSoft herramienta="VS Code" uso="Editor" />
                    <BtnSoft herramienta="Figma" uso="Design" />
                    <BtnSoft herramienta="Postman" uso="API" />
                    <BtnSoft herramienta="Jira" uso="Management" />
                    <BtnSoft herramienta="Slack" uso="Communication" />
                    <BtnSoft herramienta="Notion" uso="Productivity" />
                    <BtnSoft herramienta="Adobe CS" uso="Design" />
                    <BtnSoft herramienta="Linux" uso="OS" />
                    <BtnSoft herramienta="Webpack" uso="Build" />
                    <BtnSoft herramienta="Vite" uso="Build" />
                </div>
            </div>
        </div>
    )
}

export default Skills;