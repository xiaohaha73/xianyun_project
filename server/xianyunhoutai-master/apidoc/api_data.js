define({ "api": [
  {
    "type": "post",
    "url": "/accounts/login",
    "title": "登录",
    "name": "Login",
    "group": "ACCOUNT",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>token</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>用户信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    \"jwt\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTU0NTIwMDAzLCJleHAiOjE1NTcxMTIwMDN9.qiTS5nyRPz14X4wfcmy7pen6edXpimL5iBbTHY5K-8o\",\n    \"user\": {\n        \"id\": 1,\n        \"username\": \"13312882474\",\n        \"email\": null,\n        \"role\": 2,\n        \"nickname\": \"my\",\n        \"created_at\": 1553587751614,\n        \"updated_at\": 1553587751627\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "ACCOUNT",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/accounts/register",
    "title": "注册",
    "name": "Register",
    "group": "ACCOUNT",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "captcha",
            "description": "<p>手机验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>token</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>用户信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    \"jwt\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTU0NTIwODMwLCJleHAiOjE1NTcxMTI4MzB9.w2LbX41OFG4VJArlGq4BJBVFdjRzb2v5Z_uhsb4oPhA\",\n    \"user\": {\n        \"id\": 6,\n        \"username\": \"13312882472\",\n        \"email\": null,\n        \"role\": {\n            \"id\": 2,\n            \"name\": \"Authenticated\",\n            \"description\": \"Default role given to authenticated user.\",\n            \"type\": \"authenticated\"\n        },\n        \"nickname\": \"my\",\n        \"created_at\": 1554520830711,\n        \"updated_at\": 1554520830723,\n        \"comments\": []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "ACCOUNT",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/captchas",
    "title": "手机验证码",
    "name": "getCaptchas",
    "group": "ACCOUNT",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    status: 0,\n    message: \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "ACCOUNT",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/",
    "title": "接口统一说明",
    "group": "A",
    "examples": [
      {
        "title": "接口统一说明",
        "content": "接口地址： http://localhost:1337\n\n分页查询条件： \n{\n   _start: 默认0,\n   _limit: 获取条数\n   _sort: 排序\n}\n\n访问需要登录授权接口：\n需要添加头信息Authorization\n{\n   Authorization： Bearer [token]\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "A",
    "name": "Get"
  },
  {
    "type": "get",
    "url": "/cities",
    "title": "查找城市",
    "name": "getCities",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>城市名称</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    data: [{\n        ...,\n        scenics: [] // 景点，展示在酒店的搜索的区域位置\n    }],\n    total: 100\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "Address",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/province/search?",
    "title": "查找省份下的城市",
    "name": "getProvince",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>省份id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    data: {},\n    total: 100\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "Address",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/hotels/comments",
    "title": "获取酒店评论",
    "name": "Get_Hotel_Comments",
    "group": "COMMENT",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hotel",
            "description": "<p>酒店id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_limit",
            "description": "<p>条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_start",
            "description": "<p>开始数据（分页）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    \"data\": [\n        {\n            \"id\": 1,\n            \"account\": 1,\n            \"content\": \"酒店环境很好\",\n            \"like\": 1,\n            \"likeIds\": [],\n            \"score\": 4.5,\n            \"hotel\": 2,\n            \"created_at\": 1554368708175,\n            \"updated_at\": 1554705888282\n        }\n    ],\n    \"total\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "COMMENT",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/comments/like",
    "title": "评论点赞",
    "name": "Hotel_Comments_Like",
    "group": "COMMENT",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>评论id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    id: 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "COMMENT",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/comments",
    "title": "提交评论",
    "name": "Set_Hotel_Comments",
    "group": "COMMENT",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "score",
            "description": "<p>评分对象</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "score.location",
            "description": "<p>位置评分</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "score.service",
            "description": "<p>服务评分</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "score.fancility",
            "description": "<p>设施评分</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "score.all",
            "description": "<p>总体评分</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "pics",
            "description": "<p>图片</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hotel",
            "description": "<p>酒店id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "post",
            "description": "<p>文章id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "follow",
            "description": "<p>回复id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    \"status\": 0,\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "COMMENT",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/hotels/options",
    "title": "酒店选项",
    "name": "Hotel_Options",
    "group": "HOTEL",
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    data: {\n        \"levels\": [],   // 酒店等级\n        \"types\": [],    // 酒店类型\n        \"assets\": [],   // 酒店设施\n        \"brands\": []    // 酒店品牌\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "HOTEL",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/hotels",
    "title": "酒店详情",
    "name": "Hotels",
    "group": "HOTEL",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>酒店id(酒店详情)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city",
            "description": "<p>城市id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price_in",
            "description": "<p>酒店价格</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scenic",
            "description": "<p>景点id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name_contains",
            "description": "<p>名字模糊查询</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hotellevel",
            "description": "<p>酒店星级</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hoteltype",
            "description": "<p>酒店类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hotelbrand",
            "description": "<p>酒店品牌</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hotelasset",
            "description": "<p>酒店设施</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "enterTime",
            "description": "<p>入店时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "person",
            "description": "<p>人数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_limit",
            "description": "<p>条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_start",
            "description": "<p>开始数据（分页）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>酒店信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    \"data\": [       // 酒店列表\n        \n    ],\n    nextStart: 10,  // 下次分页开始\n    total: 55       // 总数据条数\n    \n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "请求例子",
        "content": "127.0.0.1:1337/hotels?city=197&enterTime=2019-06-12&leftTime=2019-07-15&_limit=1&_start=0",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "HOTEL",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/hotels/comments",
    "title": "获取酒店评论",
    "name": "Get_Hotel_Comments",
    "group": "Hotel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hotel",
            "description": "<p>酒店id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_limit",
            "description": "<p>条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_start",
            "description": "<p>开始数据（分页）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    \"data\": [\n        {\n            \"id\": 1,\n            \"account\": 1,\n            \"content\": \"酒店环境很好\",\n            \"like\": 1,\n            \"likeIds\": [],\n            \"score\": 4.5,\n            \"hotel\": 2,\n            \"created_at\": 1554368708175,\n            \"updated_at\": 1554705888282\n        }\n    ],\n    \"total\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "Hotel",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/scenics/banners",
    "title": "首页轮播图",
    "name": "get_index_banners",
    "group": "Index",
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    data: [{\n        url: \"\", // 图片链接\n        desc: \"\", // 图片描述\n    }],\n    total: 100\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "Index",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/airorders/checkpay",
    "title": "查询付款状态",
    "name": "air_check_pay",
    "group": "JiPiao",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nonce_str",
            "description": "<p>支付接口返回的订单金额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "out_trade_no",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n{\n    \"trade_state\": \"NOTPAY\",\n    \"statusTxt\": \"订单未支付\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "JiPiao",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/airorders/:id",
    "title": "订单详情",
    "name": "air_detail",
    "group": "JiPiao",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    ...// 订单详情\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "JiPiao",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/airorders",
    "title": "提交机票订单",
    "name": "air_orders",
    "group": "JiPiao",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "users",
            "description": "<p>&lt;Object{username,id}&gt;             用户列表</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "insurances",
            "description": "<p><Number>       保险id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactName",
            "description": "<p>联系人名字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactPhone",
            "description": "<p>联系人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "invoice",
            "description": "<p>是否需要发票</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "seat_xid",
            "description": "<p>座位id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "air",
            "description": "<p>航班id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    \"status\": 0,\n    \"message\": \"订单提交成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "JiPiao",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/airorders/pay",
    "title": "微信付款",
    "name": "air_pay",
    "group": "JiPiao",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>订单金额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    \"order_id\": \"BD20190530120001\",                     // 订单编号\n    \"code_url\": \"weixin://wxpay/bizpayurl?pr=5benFv3\",  // 支付二维码链接\n    \"outTrade_no\": \"BD20190530120001\",                  // 订单编号(带字母)\n    \"nonce_str\": \"mk8FGAmn3DhJjSCedQdtGRbfbGwt8n6A\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "JiPiao",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/airs/:id",
    "title": "选择机票",
    "name": "airs",
    "group": "JiPiao",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "/:id",
            "description": "<p>机票id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "seat_xid",
            "description": "<p>座位id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    \"id\": 2,\n    \"org_city_name\": \"广州\",\n    \"dst_city_name\": \"上海\",\n    \"airline_name\": \"国航\",\n    ...\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "JiPiao",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/airs",
    "title": "机票列表",
    "name": "getAirs",
    "group": "JiPiao",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "departCity",
            "description": "<p>出发城市</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "departCode",
            "description": "<p>出发城市代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destCity",
            "description": "<p>目标城市</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destCode",
            "description": "<p>目标城市代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "departDate",
            "description": "<p>日期 2019-05-01</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n  info: {\n    departCity,\n    destCity,\n    departDate\n  },\n  flights,\n  options: {\n    airport,\n    flightTimes: [\n      {from: 0, to: 6},\n      {from: 6, to: 12},\n      {from: 12, to: 13},\n      {from: 13, to: 19},\n      {from: 19, to: 24},\n    ],\n    company\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "JiPiao",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/airs/city",
    "title": "实时机票城市",
    "name": "getAirsCity",
    "group": "JiPiao",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>出发城市</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n  data: [{\n    code: \"440100000000\",\n    created_at: \"2019-04-02 08:18:16\",\n    id: 197,\n    level: \"2\",\n    name: \"广州市\",\n    parentCode: \"440000000000\",\n    sort: \"CAN\",\n    updated_at: 1558617184703\n  }];\n  total: 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "JiPiao",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/airs/sale",
    "title": "推荐机票",
    "name": "getAirsSale",
    "group": "JiPiao",
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n  data: [{\n    cover: \"https://imgsrc.baidu.com/baike/pic/item/a71ea8d3fd1f41340d8f3dec281f95cad0c85ee3.jpg\"\n    departCity: \"广州\"\n    departCode: \"CAN\"\n    departDate: \"2019-06-17\"\n    destCity: \"上海\"\n    destCode: \"SHA\"\n    price: 760\n  }];\n  total: 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "JiPiao",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/airs/city_sort",
    "title": "城市简称 [弃用]",
    "name": "getCitySort",
    "group": "JiPiao",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>出发城市</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n  data: \"\";\n  status: 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "JiPiao",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/posts",
    "title": "新增文章",
    "name": "Add_posts",
    "group": "POSTS",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city",
            "description": "<p>城市id | 城市名称</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    \"status\": 0,\n    \"message\": \"文章新增成功\",\n    \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "POSTS",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/posts/comments",
    "title": "获取文章评论",
    "name": "Get_Post_Comments",
    "group": "POSTS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "post",
            "description": "<p>文章id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_limit",
            "description": "<p>条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_start",
            "description": "<p>开始数据（分页）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    \"data\": [\n        {\n            \"id\": 1,\n            ...\n        }\n    ],\n    \"total\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "POSTS",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/posts/recommend",
    "title": "推荐文章",
    "name": "Get_Recommend_Post",
    "group": "POSTS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    \"status\": 0,\n    \"message\": \"收藏成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "POSTS",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/postkinds",
    "title": "获取文章分类",
    "name": "Get_post_types",
    "group": "POSTS",
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "POSTS",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/posts/like",
    "title": "文章点赞",
    "name": "Posts_Like",
    "group": "POSTS",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>评论id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    id: 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "POSTS",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/posts/star",
    "title": "收藏文章",
    "name": "Star_Posts",
    "group": "POSTS",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    \"status\": 0,\n    \"message\": \"收藏成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "POSTS",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/posts",
    "title": "文章列表",
    "name": "get_posts",
    "group": "POSTS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city",
            "description": "<p>城市id | 城市名称</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    \"data\": {},\n    \"total\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "POSTS",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/posts/cities",
    "title": "城市菜单列表",
    "name": "get_posts_cities",
    "group": "POSTS",
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    \"data\": [\n        type: \"\"        // 主题类型\n        children: []    // 城市列表 \n    ],\n    \"total\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "POSTS",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/posts",
    "title": "文章详情",
    "name": "get_posts_detail",
    "group": "POSTS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "{\n    ...文章详情\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "POSTS",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/upload",
    "title": "文件上传",
    "name": "upload",
    "group": "UPLOAD",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "files",
            "optional": false,
            "field": "files",
            "description": "<p>评论id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求例子",
        "content": "<form>\n  <!-- Can be multiple files -->\n  <input type=\"file\" name=\"files\">\n  <input type=\"submit\" value=\"Submit\">\n</form>\n\n<script type=\"text/javascript\">\n  const formElement = document.querySelector('form');\n\n  formElement.addEventListener('submit', (e) => {\n    e.preventDefault();\n\n    const request = new XMLHttpRequest();\n\n    request.open('POST', 'http://127.0.0.1:1337/upload');\n\n    request.send(new FormData(formElement));\n  });\n</script>",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功响应：",
          "content": "[\n    {\n        created_at: 1554780485209,\n        ext: \".jpeg\",\n        hash: \"a067aac50f3c4224bfb060f7c81dc54c\",\n        id: 3,\n        mime: \"image/jpeg\",\n        name: \"wKgBZ1laE5GAH0GWAAGFZyv3znE68.jpeg\",\n        provider: \"local\",\n        public_id: null,\n        related: [],\n        sha256: \"xn-vndROmvVAbUIqrahe0zAizgAn2S1cEKcA6_ubcKE\",\n        size: \"99.96\",\n        updated_at: 1554780485233,\n        url: \"/uploads/a067aac50f3c4224bfb060f7c81dc54c.jpeg\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/routes.js",
    "groupTitle": "UPLOAD",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": {\n      \"statusCode\": 400,\n      \"error\": \"Bad Request\",\n      \"message\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  }
] });
