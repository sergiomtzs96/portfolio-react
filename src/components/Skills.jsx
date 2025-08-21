import ContainerSkills from "./ContainerSkills";
import BtnSoft from "./BtnSoft";



function Skills() {
    const frontSkills = [
            { name: "React", porcentaje: "60%", color: "blue"},
            { name: "Bootstrap", porcentaje: "95%", color: "blue" },
            { name: "JavaScript", porcentaje: "80%", color: "blue" },
            { name: "TailwindCSS", porcentaje: "85%", color: "blue" },
        ];
        const backSkills = [
            { name: "Node.js", porcentaje: "60%", color: "green" },
            { name: "Java", porcentaje: "70%", color: "green" },
            { name: "SQL", porcentaje: "85%", color: "green" },
            { name: "PHP", porcentaje: "80%", color: "green" },
        ];
        const designSkills = [
            { name: "Docker", porcentaje: "50%", color: "violet" },
            { name: "AWS/GCP", porcentaje: "30%", color: "violet" },
            { name: "Git/GitHub", porcentaje: "95%", color: "violet" },
            { name: "CI/CD", porcentaje: "40%", color: "violet" },
        ];
    return (
        <div id="skills" className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col items-center mb-10 w-200" data-aos="fade-up">
                <h4 className="text-3xl font-bold">Habilidades Técnicas</h4>
                <p className="text-gray-500">Tecnologías y herramientas que domino para crear soluciones completas</p>
            </div>
            <div data-aos="fade-left">
                <ContainerSkills title="Frontend" skills={frontSkills} img="blue" />
                <ContainerSkills title="Backend" skills={backSkills} img="green" />
                <ContainerSkills title="DevOps & Herramientas" skills={designSkills} img="violet" />
            </div>

            <div className="flex flex-col items-center border-1 border-gray-100 rounded-lg shadow-lg w-200 mb-50" data-aos="fade-left">
                <p className="text-2xl font-bold mt-5">Herramientas y Software</p>
                <div className="grid grid-cols-3 grid-rows-4 gap-7 mt-5 mb-5 w-180" data-aos="fade-down">
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