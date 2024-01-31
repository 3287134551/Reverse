# import requests

# import json
# cookies = {
#     'NMTID': '00OIOOQBHZO7IGY007JpMyRxxBmOTsAAAGNTflngQ',
#     '_iuqxldmzr_': '32',
#     '_ntes_nnid': '0e9e782fc292dec8f450c3b93d0eefab,1706410199393',
#     '_ntes_nuid': '0e9e782fc292dec8f450c3b93d0eefab',
#     'WEVNSM': '1.0.0',
#     'WNMCID': 'tatept.1706410200901.01.0',
#     'sDeviceId': 'YD-ZgihDr6SZXBBQgVABEeAtzD2%2FseUURst',
#     'WM_NI': 'KaF1FZQWYsZtwZSM0MUSg76OKA0CXARIWhGcwWxdBAQkATHn32GKmxchiKIjI7m7FIAMV8lYcO4cuehou%2B9DH6thfmP2utZcd7RDabWb82mtqxL3v1CGE1wUSZTNKEJuQU0%3D',
#     'WM_NIKE': '9ca17ae2e6ffcda170e2e6ee85cd6ba5eaf8b2cd5dbaeb8ea6c85b939a8eadc534f29cb796bb45839da4a7f42af0fea7c3b92a89bf8ad2c55293899794d980b5869daeb347978da9d8b545899f00a4db4b92979989c669b589b885c14b93b58fb5cb66f1ee89acf074a1b8a7accc628be9a3d8c54383939ad9ef53a191fc84f86facb1bbccbc508ceabc89e56794eebb95d969a8e99ea5e46a95bef8d3f080b3a884d4f53b81998bd2f65f91869cafca4f8aab9fb6b337e2a3',
#     'WM_TID': '625MbPU58KNAFVFBEUfF52Cjq9eVC1Uq',
#     'ntes_utid': 'tid._.Ra89y6Ni6J5BAgVEAAOF4ySm%252BtaFF9JN._.0',
#     'JSESSIONID-WYYY': 'AwxYMlmsPOdGUPgcEOOgh2%5Cx4PoEVnaE%2FfGOmNZpibGrntKcgFOGHiJ69qeHeo80BSh2w1cs%5CHHMUDZYupkb3AfyBiGHAvqx7%5CA67o%2BuRksEm1bl7lr%2FYIDu7IucaxqJ7%5Cm8aHqXBiFahygrJW0%2BPcel7EBiyT3flRw2V17EG%5CreOWvA%3A1706422221360',
#     '__snaker__id': 'z7TqO0aTPFhaWQoN',
#     'gdxidpyhxdE': 'fae8uq0u3a1KK8WthxVBa2T98w3v7LigMIooDYRHbnQHZJQJY5dU9hE%2BxC%5CsVZwiDdjl4zt%5CtL2I8D3GwpOxKCjBXUO1sz19%2BV9rCbBOr70lDn%2B68%2BdLp5KOtdXyxJtckVALdR4s43XW7uPTRI%2Bj%5C%2BsVkZS%2FkKdxoQD7JxeMsG%2BIdx1b%3A1706421511051',
# }

# headers = {
#     'authority': 'music.163.com',
#     'accept': '*/*',
#     'accept-language': 'zh-CN,zh;q=0.9',
#     'content-type': 'application/x-www-form-urlencoded',
#     # 'cookie': 'NMTID=00OIOOQBHZO7IGY007JpMyRxxBmOTsAAAGNTflngQ; _iuqxldmzr_=32; _ntes_nnid=0e9e782fc292dec8f450c3b93d0eefab,1706410199393; _ntes_nuid=0e9e782fc292dec8f450c3b93d0eefab; WEVNSM=1.0.0; WNMCID=tatept.1706410200901.01.0; sDeviceId=YD-ZgihDr6SZXBBQgVABEeAtzD2%2FseUURst; WM_NI=KaF1FZQWYsZtwZSM0MUSg76OKA0CXARIWhGcwWxdBAQkATHn32GKmxchiKIjI7m7FIAMV8lYcO4cuehou%2B9DH6thfmP2utZcd7RDabWb82mtqxL3v1CGE1wUSZTNKEJuQU0%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee85cd6ba5eaf8b2cd5dbaeb8ea6c85b939a8eadc534f29cb796bb45839da4a7f42af0fea7c3b92a89bf8ad2c55293899794d980b5869daeb347978da9d8b545899f00a4db4b92979989c669b589b885c14b93b58fb5cb66f1ee89acf074a1b8a7accc628be9a3d8c54383939ad9ef53a191fc84f86facb1bbccbc508ceabc89e56794eebb95d969a8e99ea5e46a95bef8d3f080b3a884d4f53b81998bd2f65f91869cafca4f8aab9fb6b337e2a3; WM_TID=625MbPU58KNAFVFBEUfF52Cjq9eVC1Uq; ntes_utid=tid._.Ra89y6Ni6J5BAgVEAAOF4ySm%252BtaFF9JN._.0; JSESSIONID-WYYY=AwxYMlmsPOdGUPgcEOOgh2%5Cx4PoEVnaE%2FfGOmNZpibGrntKcgFOGHiJ69qeHeo80BSh2w1cs%5CHHMUDZYupkb3AfyBiGHAvqx7%5CA67o%2BuRksEm1bl7lr%2FYIDu7IucaxqJ7%5Cm8aHqXBiFahygrJW0%2BPcel7EBiyT3flRw2V17EG%5CreOWvA%3A1706422221360; __snaker__id=z7TqO0aTPFhaWQoN; gdxidpyhxdE=fae8uq0u3a1KK8WthxVBa2T98w3v7LigMIooDYRHbnQHZJQJY5dU9hE%2BxC%5CsVZwiDdjl4zt%5CtL2I8D3GwpOxKCjBXUO1sz19%2BV9rCbBOr70lDn%2B68%2BdLp5KOtdXyxJtckVALdR4s43XW7uPTRI%2Bj%5C%2BsVkZS%2FkKdxoQD7JxeMsG%2BIdx1b%3A1706421511051',
#     'nm-gcore-status': '1',
#     'origin': 'https://music.163.com',
#     'referer': 'https://music.163.com/',
#     'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
#     'sec-ch-ua-mobile': '?0',
#     'sec-ch-ua-platform': '"Windows"',
#     'sec-fetch-dest': 'empty',
#     'sec-fetch-mode': 'cors',
#     'sec-fetch-site': 'same-origin',
#     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
# }

# params = {
#     'csrf_token': '',
# }

# with open('网易云音乐/3.JS', 'r', encoding='utf-8') as f:
#     js_code = f.read()
# ctx = execjs.compile(js_code)
# result = ctx.call('d')

# # print(result)

# # data = {
# #     'params':result["encText"],
# #     'encSecKey': result["encSecKey"],
# # }
# # print(data)
# # response = requests.post('https://music.163.com/weapi/feedback/weblog?csrf_token=', params=params,headers=headers, data=data)
# # print(response.text)

# import json

# data = {
#     'params': result["encText"],
#     'encSecKey': result["encSecKey"],
# }

# data_str = json.dumps(data)  # 将 data 字典转为字符串

# response = requests.post('https://music.163.com/weapi/feedback/weblog?csrf_token=',headers=headers, data=data_str)

# print(response.text)



import requests
import execjs
cookies = {
    'NMTID': '00OIOOQBHZO7IGY007JpMyRxxBmOTsAAAGNTflngQ',
    '_iuqxldmzr_': '32',
    '_ntes_nnid': '0e9e782fc292dec8f450c3b93d0eefab,1706410199393',
    '_ntes_nuid': '0e9e782fc292dec8f450c3b93d0eefab',
    'WEVNSM': '1.0.0',
    'WNMCID': 'tatept.1706410200901.01.0',
    'sDeviceId': 'YD-ZgihDr6SZXBBQgVABEeAtzD2%2FseUURst',
    'WM_NI': 'KaF1FZQWYsZtwZSM0MUSg76OKA0CXARIWhGcwWxdBAQkATHn32GKmxchiKIjI7m7FIAMV8lYcO4cuehou%2B9DH6thfmP2utZcd7RDabWb82mtqxL3v1CGE1wUSZTNKEJuQU0%3D',
    'WM_NIKE': '9ca17ae2e6ffcda170e2e6ee85cd6ba5eaf8b2cd5dbaeb8ea6c85b939a8eadc534f29cb796bb45839da4a7f42af0fea7c3b92a89bf8ad2c55293899794d980b5869daeb347978da9d8b545899f00a4db4b92979989c669b589b885c14b93b58fb5cb66f1ee89acf074a1b8a7accc628be9a3d8c54383939ad9ef53a191fc84f86facb1bbccbc508ceabc89e56794eebb95d969a8e99ea5e46a95bef8d3f080b3a884d4f53b81998bd2f65f91869cafca4f8aab9fb6b337e2a3',
    'WM_TID': '625MbPU58KNAFVFBEUfF52Cjq9eVC1Uq',
    'ntes_utid': 'tid._.Ra89y6Ni6J5BAgVEAAOF4ySm%252BtaFF9JN._.0',
    'JSESSIONID-WYYY': 'AwxYMlmsPOdGUPgcEOOgh2%5Cx4PoEVnaE%2FfGOmNZpibGrntKcgFOGHiJ69qeHeo80BSh2w1cs%5CHHMUDZYupkb3AfyBiGHAvqx7%5CA67o%2BuRksEm1bl7lr%2FYIDu7IucaxqJ7%5Cm8aHqXBiFahygrJW0%2BPcel7EBiyT3flRw2V17EG%5CreOWvA%3A1706422221360',
    '__snaker__id': 'z7TqO0aTPFhaWQoN',
    'gdxidpyhxdE': 'fae8uq0u3a1KK8WthxVBa2T98w3v7LigMIooDYRHbnQHZJQJY5dU9hE%2BxC%5CsVZwiDdjl4zt%5CtL2I8D3GwpOxKCjBXUO1sz19%2BV9rCbBOr70lDn%2B68%2BdLp5KOtdXyxJtckVALdR4s43XW7uPTRI%2Bj%5C%2BsVkZS%2FkKdxoQD7JxeMsG%2BIdx1b%3A1706421511051',
}

headers = {
    'authority': 'music.163.com',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/x-www-form-urlencoded',
    'cookie': 'NMTID=00OIOOQBHZO7IGY007JpMyRxxBmOTsAAAGNTflngQ; _iuqxldmzr_=32; _ntes_nnid=0e9e782fc292dec8f450c3b93d0eefab,1706410199393; _ntes_nuid=0e9e782fc292dec8f450c3b93d0eefab; WEVNSM=1.0.0; WNMCID=tatept.1706410200901.01.0; sDeviceId=YD-ZgihDr6SZXBBQgVABEeAtzD2%2FseUURst; WM_NI=KaF1FZQWYsZtwZSM0MUSg76OKA0CXARIWhGcwWxdBAQkATHn32GKmxchiKIjI7m7FIAMV8lYcO4cuehou%2B9DH6thfmP2utZcd7RDabWb82mtqxL3v1CGE1wUSZTNKEJuQU0%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee85cd6ba5eaf8b2cd5dbaeb8ea6c85b939a8eadc534f29cb796bb45839da4a7f42af0fea7c3b92a89bf8ad2c55293899794d980b5869daeb347978da9d8b545899f00a4db4b92979989c669b589b885c14b93b58fb5cb66f1ee89acf074a1b8a7accc628be9a3d8c54383939ad9ef53a191fc84f86facb1bbccbc508ceabc89e56794eebb95d969a8e99ea5e46a95bef8d3f080b3a884d4f53b81998bd2f65f91869cafca4f8aab9fb6b337e2a3; WM_TID=625MbPU58KNAFVFBEUfF52Cjq9eVC1Uq; ntes_utid=tid._.Ra89y6Ni6J5BAgVEAAOF4ySm%252BtaFF9JN._.0; JSESSIONID-WYYY=AwxYMlmsPOdGUPgcEOOgh2%5Cx4PoEVnaE%2FfGOmNZpibGrntKcgFOGHiJ69qeHeo80BSh2w1cs%5CHHMUDZYupkb3AfyBiGHAvqx7%5CA67o%2BuRksEm1bl7lr%2FYIDu7IucaxqJ7%5Cm8aHqXBiFahygrJW0%2BPcel7EBiyT3flRw2V17EG%5CreOWvA%3A1706422221360; __snaker__id=z7TqO0aTPFhaWQoN; gdxidpyhxdE=fae8uq0u3a1KK8WthxVBa2T98w3v7LigMIooDYRHbnQHZJQJY5dU9hE%2BxC%5CsVZwiDdjl4zt%5CtL2I8D3GwpOxKCjBXUO1sz19%2BV9rCbBOr70lDn%2B68%2BdLp5KOtdXyxJtckVALdR4s43XW7uPTRI%2Bj%5C%2BsVkZS%2FkKdxoQD7JxeMsG%2BIdx1b%3A1706421511051',
    'nm-gcore-status': '1',
    'origin': 'https://music.163.com',
    'referer': 'https://music.163.com/',
    'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
}

params = {
    'csrf_token': '',
}

with open('网易云音乐/3.JS', 'r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
result = ctx.call('d')


params="vg%2FjniZVAxIXZsr1ylV7%2F3oUAVwanlW5XD2LYT70CtIpwI1jLBzb12bdDTIlS%2Fp6UTxpM45mYHD7ntnKvVNvq268LatHNoXRyYEENZd8oan1ERMxWxFe%2FxOesNLk1cjoIBWT7ybOcEM%2F6QqbirJ%2B2O8Q4CsvvsrUEZ13MUdeAOZjIjVb1C7w1DWQKon2u5WUCOgdBiaEoQAW1jSp%2BSvH93sha%2B7fQiFio4OtvrJ8Em8INnt7O0ExeIbr0FH5nNKT%2BbEuxuZ3gdbMkJiUC%2FkxO1OG%2BtHaMo9fBXOviEsfRhNjHhfsauMiSO5W5x60KhDrNOQs7qqNGrSdG7B967LnkCK80emy6VqSpKh%2FI7nPj2uCaDYpXWoWIxme2rjG34Bk4zwuPqzmtObZp8GO72SlmIXpxk69jyx4itlR8j%2FEHvOuuZCJabDztiUJPbvictZKAchRZs9DvXBr8W%2F70tMxHNyCZAXdXbgvNsrjGNZY3ps89%2F2RLe0mzuQYLNN9bl0l5GEIzbXwr9ypjWvozu4KlcsgxoSsl0f0tdhG3sPjBMHO87fevoPYRGWGdvC5HarFsImZ7%2B8969jUf5I6dmEGuB6MvSgHP7fVxoDXp58EQaizTj5FBaP3VbfsPdvKRi4erD%2FFs1oRDLBoFjqhhsNovkfP%2BqIpsnBC%2FViOeke%2BU5rQKe0sR521uHdzxCvr0jsAFjOzVZRnNAJ6FL%2FCdZzba%2F%2Fe9BZ1g48tagfyNnHJz77zOwslJITPAh6Cq1akAXwRfX016ygcTOfiHxjDe6zYYaqRIYQfwMPLFphYcpl2MqrJ0euyt%2Fh0yJxcnAVjwur1uWkuke1AYNaAq7SFvQJJ8P20k9Mrswq4MeKeG%2F%2BeylZ1JrK6wYwbCCOyBdv3lwwCH19J1819SbXbd9bhkrUoIan8okGLZylGZZUTWJGnG4hLxRIUgY8YHymiA49D84XFhO4bWJEqhOlQH8he8lkLHEXm09IxJvD6DN1gsIA87DfYypna7%2BId71jMUFldnFkR48eUyqX8LvR%2FX%2Bl3I7qZ6YbWJX35LHeyg1ar7cbWmUkT5%2FpZRz1j79RvLypVDMsAUaYDfzBhEiEj8QbvFeD3avbBKn0oNnZ%2BH%2FZhfvFgS13giAhTrPdJR8YGriXc3nIA3qORMr9lALZFsyRSqreDoD6W0DhjLmCrvKdq2mLh8LMD7PZh%2BNfrGcdrwCfbiEEnVF5ldH2qgdOGzhvNuC6%2BjEILNmc8CXoqv6HrZi%2F8NKCtxar8u1DU2VV0sFkeysqbWIvOeERc8RCyrQBcSTwVgC41yyBcNrQsrd6j61NXc80oSHzWpm3B2rFtARfn9IFoYDrlPXolCVM9f8y%2Bq8AHVhZn5ZbyDgC4FizTUl5nY8pyMQysSmV4SVDx3nobqVN3rxOeNj0Qoya3%2Bnq2yiklSlqSeldZYYxrbJTpxj5j3e6KnlSFYxZNFe7GOmD1nHaLEUQsZv1skldb8i9ZAHTabPuRXRGxewsqvhdg0UMoWFGpNsBQGkIpfJTfxM7feIscw98cq5BXUcXEFQbNDLZl4kNGvZtoNpLm5TXKbsDxUWPMx13EXV6%2FpQmf7MHHOpBPszu92hTtZVSQSsLykdCC2UUvrjR%2FTPIGAOXkAYwYoYp6k6BAsIvocR0y6Kop%2Fow31lxdIltKGnUK7Ntibi4vs4dkMROOpfcaxc3Rr3LxzneNEACMldjuAbgDDk1oxIWcYVDhgtENvI98lP8bJptDbQ%3D%3D&encSecKey=8cef51a8f09249a4ac0c14487e4cd1a1e5996d5bb9ee7f8a3e0807684f777198ef529deb1400bfc3a439659cbf84caa66beaf3ee5a4b54eb868246e4f07ab723f1f9481c93b1614e09c7c493dce4401dde7863af6d026d49731618a28f62c35de2c8ca1b0a8406a785a227817ce4f1deeb377da10c83c551637b9ed6581b1d56"

response = requests.post('https://music.163.com/weapi/feedback/weblog', params=params, cookies=cookies, headers=headers, data=params)
print(response.text)