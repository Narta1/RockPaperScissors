var myArray = ['Rock', 'Paper', 'Scissors']; 
        /*we will load the score we just saved 
        and the score will be saved as a json string so we need to convert it to object using json parse*/
       
        let stats = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            loses: 0,
            ties: 0
        };
        console.log(localStorage.getItem('score'));
        

        function pickComputerMove(){
            let computer=myArray[Math.floor(Math.random()*myArray.length)];
            return computer;

        }
        const scoreH=document.querySelector('.js-score');
        const resH=document.querySelector('.js-res');
        scoreH.innerHTML=`
            
            Wins: ${stats.wins}, Losses : ${stats.loses}, Ties: ${stats.ties}`;

        function result(player){
            const computer=pickComputerMove();
         if (computer==='Scissors' && player==='Rock'){
            stats.wins+=1;
            updateScore();
            resH.innerHTML=`You won. The computer chose 
            <img src="images/${computer}-emoji.png" alt="" class="emojis">
            `

            
            
            

        }else if (computer==='Rock' && player==='Paper'){
            stats.wins+=1;
            updateScore();
            resH.innerHTML=`You won. The computer chose 
            <img src="images/${computer}-emoji.png" alt="" class="emojis">`
            
            

        }else if (computer==='Paper' && player==='Scissors'){
            stats.wins+=1;
            updateScore();
            resH.innerHTML=`You won. The computer chose 
            <img src="images/${computer}-emoji.png" alt="" class="emojis">`
            
            

        }else if (computer===player){
            stats.ties+=1;
            updateScore();
            resH.innerHTML=`Its a tie.`
            

        }
        
        else{
            stats.loses+=1;
            updateScore();
            resH.innerHTML=`You lost. The computer chose 
            <img src="images/${computer}-emoji.png" alt="" class="emojis">`
            
            
        }
        localStorage.setItem('score',JSON.stringify(stats));
            }/*after we update the score, we save it local storage which accepts only string,so 
            we convert it,so after we save it when we load the page*/

        function updateScore(){
            scoreH.innerHTML=`
            
            Wins: ${stats.wins}, Losses : ${stats.loses}, Ties: ${stats.ties}`;

        }

        function reset(){
            stats.wins=0;
            stats.loses=0;
            stats.ties=0;
            updateScore();
            resH.innerHTML=`Game has been reset.`
            

            localStorage.removeItem('score');
            
        }

