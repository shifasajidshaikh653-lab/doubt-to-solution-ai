async function solveDoubt() {

    const question = document.getElementById("question").value;

    if(question===""){
        alert("Please enter your doubt.");
        return;
    }

    const apiKey = prompt("Enter your Mesh API Key");

    const response = await fetch("https://api.meshy.ai/v1/chat/completions", {

        method:"POST",

        headers:{
            "Authorization":"Bearer "+apiKey,
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            model:"gpt-4o",

            messages:[
                {
                    role:"system",
                    content:"You are a friendly AI teacher. Explain every answer in simple language with examples."
                },
                {
                    role:"user",
                    content:question
                }
            ]

        })

    });

    const data = await response.json();

    document.getElementById("answer").innerHTML =
    data.choices[0].message.content;

}
