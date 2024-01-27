# URL Shortener API

This project is a URL shortener API built with Node.js. It allows you to shorten any URL to a unique short ID.

## Features

- **URL Shortening**: Send a POST request with a JSON body containing the URL you want to shorten, and the API will return a unique short ID.
- **URL Redirection**: Accessing the short URL will redirect you to the original URL.

## How to Use

1. **Shorten a URL**: Make a POST request to `https://url-shortner-xozo.onrender.com/url` with a JSON body in the following format:

```json
{
    "url": "<your-url-here>"
}
```


You might receive a response like pYfT-H5i5. You can then visit `https://url-shortner-xozo.onrender.com/<short-id>` to be redirected to the original URL.
