async function solve() {

    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer");

    answer.innerHTML = "Thinking...";

    try {

        const response = await fetch("https://api.meshapi.ai/v1/chat/completions", {

            method: "POST",

            headers: {

                "Content-Type": "application/json",

                "Authorization": "Bearer YOUR_MESH_API_KEY"

            },

            body: JSON.stringify({

                model: "openai/gpt-4o-mini",

                messages: [

                    {

                        role: "user",

                        content: question

                    }

                ]

            })

        });

        const data = await response.json();

        answer.innerHTML = data.choices[0].message.content;

    }

    catch(error){

        answer.innerHTML = "Something went wrong.";

        console.log(error);

    }

}
