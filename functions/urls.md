Transform Data
==========================================
Given the following JSON:

```javascript
[
    {
        "stream": {
            "id": 9
        },
        "socialPost": {
            "platformName": "Instagram",
            "mediaUrl": "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/18013387_1750169198628474_7627477913259999232_n.jpg"
        }
    },
    {
        "stream": {
            "id": 10
        },
        "socialPost": {
            "platformName": "Twitter",
            "mediaUrl": "https://pbs.twimg.com/media/DGgVzdaXcAEkXqQ.jpg"
        }
    },
    {
        "stream": {
            "id": 30
        },
        "socialPost": {
            "platformName": "Instagram",
            "mediaUrl": "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/12934996_1176695215681775_801959250_n.jpg"
        }
    }
]
```

Map the mediaUrls into an array of URLs.

Expected Output: `[ “https://someurl”, “http://anotherurl”, ... ];`
