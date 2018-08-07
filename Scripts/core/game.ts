//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function(){
    // Game Variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let AssetManager: createjs.LoadQueue;
    let CurrentScene: objects.Scene;
    let CurrentState: config.Scene;
    
    let ScoreBoard: managers.ScoreBoard;
    let keyboardManager:managers.Keyboard;



    let Manifest = [
        {id: "StartButton", src:"/Assets/images/StartButton.png"},
        {id: "InstructionButton", src:"/Assets/images/InstructionButton.png"},
        {id: "SettingsButton", src:"/Assets/images/SettingsButton.png"},
        {id: "SoundOn", src:"/Assets/images/SoundOn.png"},
        {id: "SoundOff", src:"/Assets/images/SoundOff.png"},
        {id: "PlayBtn", src:"/Assets/images/play.png"},
        {id: "NextButton", src:"/Assets/images/NextButton.png"},
        {id: "BackButton", src:"/Assets/images/BackButton.png"},
        {id: "plane", src:"/Assets/images/plane.png"},
        {id: "island", src:"/Assets/images/island.png"},
        {id: "ocean", src:"/Assets/images/ocean.png"},
        {id: "cloud", src:"/Assets/images/cloud.png"},
        {id: "yay", src:"/Assets/audio/yay.ogg"},
        {id: "thunder", src:"/Assets/audio/thunder.ogg"},
        {id: "engine", src:"/Assets/audio/engine.ogg"},
        {id: "hiyashi", src:"/Assets/images/hiyashi.png"},
        {id: "bullet-fire", src:"/Assets/images/bullet-fire.png"},
        {id: "hiyashiRington", src:"/Assets/audio/hiyashiRington.mp3"},
        {id: "hiyashiScreen", src:"/Assets/images/hiyashiScreen.png"},
        {id: "bck", src:"/Assets/audio/bck.wav"},
        {id: "bulletFire", src:"/Assets/audio/bulletFire.wav"},
        {id: "gameOver", src:"/Assets/audio/GameOver.mp3"},
        {id: "fireball", src:"/Assets/audio/fireball.wav"},
        {id: "hit", src:"/Assets/audio/hit.wav"}
    ]


    function Init():void {
        console.log(`%c Assets Loading...`,"font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }

    function Start():void {
        console.log(`%c Game Initializing...`,"font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);

        managers.Game.Stage = stage;

        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);

        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;

        keyboardManager= new managers.Keyboard();
        managers.Game.keyboardManager = keyboardManager;

        ScoreBoard = new managers.ScoreBoard;
        managers.Game.ScoreBoard = ScoreBoard;
        // This is where all the magic happens
        Main();
    }

    function Update():void {
        if(CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }

        CurrentScene.Update();

        stage.update();
    }

    function Main():void {
        console.log(`%c Scene Switching...`,"font-style:italic; font-size:16px; color:blue;");

        if(CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
    
        switch(CurrentState) {
            case config.Scene.START:
            CurrentScene = new scenes.Start();
            break;

            case config.Scene.PLAY:
            CurrentScene = new scenes.Play();
            break;

            case config.Scene.SETTINGS:
            CurrentScene = new scenes.Settings();
            break;

            case config.Scene.INSTRUCTIONS:
            CurrentScene = new scenes.Instructions();
            break;


            case config.Scene.END:
            CurrentScene = new scenes.End();
            break;
        }

        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }

    window.addEventListener("load", Init);

})();