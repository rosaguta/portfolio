"use server";

export async function getQuoteCountOnServer() {
    const authResponse = await fetch(
        "https://quotesapi.rosevanleeuwen.com/auth",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: process.env.QUOTES_USERNAME,
                password: process.env.QUOTES_PASSWORD,
            }),
            cache: "no-store",
        }
    );

    if (!authResponse.ok) {
        throw new Error("Failed to authenticate with quotes API");
    }

    const token = await authResponse.text();
    const endpoints = ["quotes", "rizzes", "insults"]
    const response = []
    for (let i = 0; i < endpoints.length; i++) {
        const quotesResponse = await fetch(
            "https://quotesapi.rosevanleeuwen.com/"+endpoints[i],
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                cache: "no-store",
            }
        );

        if (!quotesResponse.ok) {
            throw new Error("Failed to retrieve "+endpoints[i]);
        }

        const quotes = await quotesResponse.json();
        response.push(quotes.length)
    }

    return response;
}