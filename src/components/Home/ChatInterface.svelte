<div class="chat-interface">
    <div class="top">
        <div class="top-left">
            <span>Name</span>
        </div>
        <div class="top-center"></div>
        <div class="top-right"></div>
    </div>
    <div class="center"></div>
    <div class="bottom">
       <input class="input-message" type="text" placeholder="Type Message"/>
       <button class="btn-send">Send</button>
    </div>

</div>

<style >
.chat-interface{
    flex: 0 0 70%;
    height: 100%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.top{
    flex: 0 0 7%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.top-left{
    flex: 0 0 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.top-center{
    flex: 0 0 60%;
}

.top-right{
    flex: 0 0 20%;
}

.center{
    flex: 0 0 80%;
    width: 100%;
    background-color: white;
}

.bottom{
    flex: 0 0 13%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bottom>.input-message{
    flex: 0 0 60%;
    height: 50px;
    padding: 20px;
    background-color: whitesmoke;
    border-radius: 10px;

}

.bottom>.btn-send{
    flex: 0 0 20%;
    height: 50px;
    background-color: coral;
    border-radius: 5px;
    margin: 0px 15px;
}

</style>