let app = new Vue ({
    el: "#app",
    data : {
        logoBoolean : "./assets/img/logoBoolean.png",
        task : "",
        tasks: [

        ]
    },
    created() {
        document.addEventListener("keyup", (e) => {
          if (e.key === "Enter") {
            this.addTask();
          };
        });
    },      
    methods : {
        addTask(){
        if (this.task.length>= 3){
            this.tasks.push(this.task);
            this.task = "";
            };
        },
        removeTask(index){
            this.tasks.splice(index, 1);
        },
        removeAllTask(index){
            this.tasks.splice(index);
        }
    }
});