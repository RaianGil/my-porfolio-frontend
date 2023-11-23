import Image from "next/image"
import Controller from "./controller"

const list = {
  nodejs: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAATlBMVEUho2Ygo2Ygo2YgomYeoWMgo2YgomUgpGYgomYgomYgomYgo2Ugo2Ygo2UtpGggo2Yho2QgomIhomUho2Uho2Ygo2Ugo2Ugo2Ynn2BHcEzAGOFFAAAAGnRSTlP/3dXOCPJqI+j7WMSOngQUMQw/TKu1hHsGAIF3GAAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAHJSURBVEjHrZbrroMgEITXCyiIoKJg3/9FDwva4qXgScqfpgkfsLMwI7z+OeBHgOJc/QOoLQFgYnwK6AL8aOkjYOjcXNb3zP10QxZQYp/YLLjL3CQBSQkehUdHI6b+DkzlcUbgC/4FuDmDVD2cSoHj4avpVgPo1QmQtP2m44v7UuwaA6pCKc1439zRYCmVioD+TsBoNDMeKwIIkCl95yY3JQIAyuuqnFKq38W6Q98DFRCJImz3CSqeAdzE+iVn+AzxAKDYLUs5FbiRzgOuWWZrkNtryQOui7tqDQR50kAZtYUamwcMFlvMhg9rVlYPjN0uEStF8wBwfXgjwOgDAK1j4Lbv8NrBkAMiV1rxnZocQPericOGP0lAu7f0fht9uBxJoHaN6ybp+2ZZaGK6aB6cryx8zfMDlXT7UVWsT2SVWnRF25aLbe46TYDpUx/kyaCPTxRNYAlLubPI63NdTiagvGML1y1U9GIzwaDV1cjIsrBNlGhsHidPVhmWwY2OmTB5j/ukUWzGApcqp4uD7eVd7X4dpoP91d4jS52OrJFWNHZhKtMZ17Sb629Zp7KhGHKlvyRJInZ9ckVZlw92n23nNPzpp8NPv2b+AI/ZqShXmHSmAAAAAElFTkSuQmCC',
  reduxjs: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAOVBMVEV+V8J+VsJ0UsR9VsJ+V8J7VMN9VsJ9V8J+V8J9VsJ9V8F+VsJ9V8J9VsJ9VsJ+V8J+VsJ9V8JHcExumdzvAAAAE3RSTlP/4wWH7A73yki6GzlskFyifCgAZpv5tQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAfFJREFUSMfVltmCgyAMRRP2RUTn/z92AshqazuPw0tb5ZiFe2Ph548L/gdgIiqho/8SODVcS5/fALuCttT+GdjTvuCl9CGR2yfA0C7tyneXcvPPgEQAy9ovC4DyEQjzjsSHJ8BRDmbKkApyD8BBCc23KanjPcBwCZBD4HvA010232ZibdQIbABx7eImlrMYgVgOinEUvEVi+3tAl/A8qQKFIP1t7vGkqWZXPvrSG3sPkCzkCgCIgz0ArKYUpHRms1m66J9TGouWW443BFmKvluGUWNHRVZA8qwD88JjziZCzgCziqXk+Usf8yEGNF2fSTj69aggDdRnQdUYZSPVWgTVj7n+owkfqkxj0Ua45VIeHasw4YqYjeZXv+SeYjXf1gD6sdfGTg4SDUjjBCtgmg88VSGwSzVArxaLNKFcPrpJYWguRcR6yrwUCF3WuXzVk8hpCDn40V6AKCpdyqQpK4bRx2S5fgHs3sgfSZF1Vx0BqgPudlR5vzqnoSUuwNauTpLTy1Tbew3HCw3t6Qimx+jSywQ4tc63M97eDselAqiV9tMq22djSl57UcSX8kXuHSMjhzIEInXaaG7OZG6OzRFw+WeeFGD95YLhkpwsug/DRZUXqIvD6w73dQgwE7RQAi037dilCRbpog6G/bO/Do/rF4YCe7I2c1+QAAAAAElFTkSuQmCC',
  github: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwFBMVEX///82NjY4ODhJSUk8PDxAQEBCQkI6OjpERERGRkZISEhLS0s1NTX4+Pg+Pj7+/v5AQEBZWVkyMjI/Pz83Nzc/Pz/v7+9AQEBERETS0tKNjY1+fn7Kyso3NzdISEg3NzdAQECnp6dubm5ISEi8vLy1tbVNTU3c3Nx2dnbl5eU6OjpLS0s2NjY+Pj5lZWVLS0vCwsJFRUWIiIhBQUFBQUFBQUH7+/vExMSgoKD29vbq6urv7+/6+vr6+vpHcExHcEyCex1FAAAAQHRSTlP//////////////////v//if8DE+VV/3oK/////62wlTT//53///7////R3/Ec//EC4/9t7sTl//+vMnTR0gAAyHwWDAAAAj5JREFUSMfV1tl6qjAQAOCAEgjKDrK64YpVi0v3c76+/1s1S0WNSf162bnxJr9jkpmJ4POXAf4C8EfxYHWE8LjqxyP/Lti4OwihoWmabdvtduhufgTBBBkGBvAEcAwDKaijI17PAV0PIwnwJ8gUAV0d+iKQDEyExEDtJ7fAH5hyoD4lN2DSwoAcEA8UBQNlyIOohYGxn2Zzja63bQrUVjbLCVCiaxA8EgAXAFhjZNvetiy3nq4bYwuAVCFgHVyBSYsA0wE4qtQCNKy0Rz8oOP0oBjYdCubgOhz6BYABdXMBXAaQBQTR61KguGdQPzAAUxEoWIZu6Ddg1KEA5Y4IOCXL0B2dQB0zYFRACCqFgbjJMKAALYEkSoWCfgMeGBjLwCsDqwY8UmC8yMC0S8G6AXMGChl4YUDhM0xlYMZnYHswpXsYsz2EDXhim85lYMlvmh2rObfE6y2ocsd6+L64sexUGTjclAYS1ZKzaPOlwYrPxDNjLjjZAqkMhBfVGndapleSAZAvrpcvSIOyao0v+gF3KMqctDQQ1Lxs1vtuhFnmqWxqkAYKLkDt4ntbWqlHkmjeqUU9/TRm+Bb9THb4HvZV0SFg1tTQBQivh0Ad0X6oitzz8l7TnOoZRPwgc2nHOcWiOpeUcwYuP8hqf4J7es/ddQP6vngYQ3OZZUvnBoiGMbkNOoyhfQPE454M2B2Z3jyQPig4R+IiHqzd5KdHsQ4Ou+1509vQDe4+u/X7x9v/Z8t6/vf28V7/zb8Od+ILLZMdRkk1PVAAAAAASUVORK5CYII=',
  nextjs: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA3lBMVEX///86Ojo3Nzc/Pz8bGhsrKysuLi4UEhQRDhFFRUVCQkInJyc9PT0jIyNISEglJSUYFhg1NTU0NDQxMTEWFBYpKSkyMjIeHR4gHyAiISINCg1DQ0MdHB3h4eEPDQ8tKi0UERTBwcFoaGhBQUETERM3NzcwMDAVEhVERERFRUVDQ0NZWVmjo6P4+PhBQUEAAAB/f39JSUlAQEAsLCwsLCyGhoZPT09DQ0N4d3iSkpLOzs4NCw0LCAsdHR0ZFhkRDxE0NDRLS0usrKzt7e0jIiMkIyRDQ0MA/zpHcExHcEyopwPGAAAASnRSTlP/////////////////////////////////////ZP+vGUT//0CXM5Q4r2Ps////SAL/l8q1qP//A////8jtx+jp7rb//+zu+v8AAJfE4bcAAAIeSURBVEjH1ZbpkqIwEIADTthVVhEVRndAuVQuQR2vce5jt8r3f6FtGEmAiej+nK8UuqvzKRHSER3+E/QthO3YW7ivr+7CG28vEOyF30rZwNtf2GeEaNkqsYwqhJFbb9XhBYdP0swdnRIiv87Et9mC9/fmFB5L8BoVeF+FqFGroBGVhZFfq8QflQT3VzWcWxQi7ixRQViyB8F0s5Bf5gWbz+AQQvpNls0QIhXepsJ2UhCQyRQmOeFFzuATAd0dMxBIRX6JiTDuEORUQNZnpus6LXXGRNBUQif5fITeW2lmmiYtqRoRJl2CCoJsIrSXkywMw1xpQoSVQOiCoHI6QmGSrddrWhJWRLgtCl1hA7OdQ2ZZVk64pQImCCAIGFsIzQKMgyCgJUyF1RcBh3D/OAxLNCfQS5ooBAwCTs4wcRPzHEdLCp20JhIUEJQkkPXZ+1wsQH/WsUQQQRDTaKPr+42Uh9647Z9mhpQIaTSw9uZbp0n5oI/GwRlkNEGQjvH8LZxLpDJwcg/ftJ8xAKF5jJvzu3VAKv1pfgE9XmfAd5NY2e12XJY85hdQbFwxUS0rEI+xUWwCQ7bBBZvadRoNy23mqc2Er/Ficn4qt5mD0e6xaAtKH07ZBeVbpdb7waJ9BYeexmrGJ4zi+EK7N55/Mnk2Tm4oQ9b44ahiyzLuf5e4N85siobzQEc/ONMLtt14qjlDwNGm8eUbexx/n/8a/wA6BHDbraeLaQAAAABJRU5ErkJggg==',
  css: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5FBMVEU1wfH////W4OkWkeggm+4cl+wjnfAalOoCfNsSjOUIg98Uj+Yxs98Ggd0fme0emO0OieMKhOANftIMh+EEftwQiuIai9kVhdUzve40wPB1r9syuucxtuYWj+cDfNsGgN3H2Oeq3u/x+vwEftsanOclq+xhw+QPgtYdmOwWkOgFftwCfNsOhuEFf9xxyeYipOsaleoZlOoXkegUjuYWkOgxkNXD5/QpsOxFuOAYk+kEftvc8fkAeuI+ldcLhN4MhuENhNy0zuQFf90TjeUAjuMMh+KN0ukSjOMoAP8Awf9HcExHcEzdR0t3AAAATHRSTlP//////////////////////////////////////yu0Xf///5H/////sp9K9w9+///YyoZDcP////9Y2P8J/xy8//84/ATo/+y8/wAAAIN4/wAAAlhJREFUSMfdltl6mzAQhWmpw2ZigZDjHbzifU8cO/GShLQXff/36UgCgiX6Nb3NuT6/zkgzSCi//1PKFwKay5uMfjDdgkqlUoFq2RSAoWiP3dxe0LShAKwk923GDVrlJmTcSkbVhZwwEgvPAkpf00YCsBYLvwZUdS0AW7HwK2ChqlsB2DN3oZyqmKqqKDequheADV/7+D3Rt0SPAPQsayM2jpWi3ctAEUrSLEts3JSfeFkCOhSwLGMqzpLGGlQOROCpAX0wjDdxlqIl62f5LhHd7mMMVAzjXZrWFQM0VVO5aIMHADwA0DCMlZQwpO5UlgVAhQF1RdkZ5CwljFIzgYLCkJY0B6ANQJ+QkQSs07VJLbtpCiwQWkvANraLwM8KA7bSHvbcDScuAz2MfSlhE9sNAZgDoGG8kRKa3A3CLhXddDsGLOw0pYQTM5OQmi8EITjW+gMAA5g94jgnCYjeGECn7yVEDGgkgOOYkXwv/aJ+RKfvxcUIQ6MbT3y6K6b5nnORLQ1CCL4DIDi64aVSLw46HGiY5iEHOEPhCLlsVIPacdDuJJ/DzrTPMhCNEAOC6/Gmn0Pftls5CV2EMMZuLcgCnTYM68K2uznADFNdQveeMcw9L9Zpoz1vlgP4YHeobJcy3F2llwwAfs4exg6XaZo2MGxtLkvXxzkJr7HbZISdufY8XX/NAabmhzsFqrse0XV9Ms17gWYfbtvz6Cfa12ydaZb/ZPmtSewG8aWpJi3/r2/c87h7YHYvNuuHrj/9x6N4gqBk6VnzE69oFNGgVqs7fv7qfwKf1h8UWZCGXNqvdAAAAABJRU5ErkJggg==',
  js: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEX33x4AAAEJCAIfHASmlhTq1Bw4MgdwZQ7cxxrQvBlPRwq4phaLfRHItBhcUwyZihJHcEyKSG9eAAAAEXRSTlP/////////////////////ACWtmWIAAAAJcEhZcwAACxMAAAsTAQCanBgAAACxSURBVEjH7ZZBEsMgCEUFoqLRJPc/bb+mnemmhmwbWQAL3ghfnNEdN809GHAGm8AEngoQ0YKQspBsyQysTM14tQKCYgEUjECFr04leiOw4gDk3jy0wme9o1JuE39EsgAaukibN9+Dj11Y8VYASIG2FO0AEPQlA0AzKtMJ7KH1Uk51fwALE8fShk1NpKBXJ6RzfXpN6ZEvZvheuPiGw1AljVjpXHteN2EO+5++6fkTGNoLn4hCJIALMRkAAAAASUVORK5CYII=',
  scanner: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAJ1BMVEX/YZi1KFgpsevPGSgmrektt+0jqeggpOYcn+QxvPCqL2HPGCdHcEzKPisgAAAADXRSTlP///////7//////8UA1Ov8YQAAAAlwSFlzAAALEwAACxMBAJqcGAAAANZJREFUOMvt1LENwjAQBVCv4JbyRCZgA2QxQMQVWSCMYEbwAilSpmUGNuCGwt93URwp0IYC6xRZft/nq+Lkw3J7QzegWJi5leYq56PBOKI6AEtLQrSCcqPBKVU3Bi5AJR7CAgxoCRAWQBxApPHQG3ABdNF4XwFmyY9qvAY0z2GN36KBjo4ulxKPM+jo6KLxGtA8hzUe7zPoLBliiadkYLPkLoC0gh4Qo8YX0FkAaQU2S3401fA6baznNxDx3qHyx3be3vjDLjAdXK6Hm7wvu+nwCz+AzfUGPQs5SgcSr5QAAAAASUVORK5CYII=',
  androidstudios: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAA21BMVEXC6v0A5nYAyFM3R0+86vpb75mx6vEH53tz6caa3vkA2GXB6v4AyFIA1mIAx1IA5nU26JyU6d3A6vvC6v0A0l8A5nYU54Vj6Lyi4PwA5nUAyFIA12YAyFIAyFIFu1MA5nYAyFIAyFJA6KKJ6NkAyFMA2WYAyFIbmGMAyFMA5nUqZVAA5XUfflA1Sk+m6uoA5nXC6f0n55Nc6Ley5vwAx1IA5XZ6mKUe54wA5XUA5nUNwW3B6vwA5nXE6/8dhVEegVCBnqyr7PAb54lV5bd8nqhj6Ltl6LtHcExHcEybOn60AAAASXRSTlP//////wL/////NzyYHPr5//9MxxPt////re4Ft63/4uTU//9ZCoj/edP/eP///4eo////7LT//5hW/9yUGv///yH///+9vQAAs71/XQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAktJREFUSMfFlll7ojAUhgMlLCKLC6hQq9a9tlq3sct078zj//9FkwMSkgDWeXrRc0MO+d7kLBBA+/809AMALk3avcC2g157UsJfAtaoKzPWHVlHgXrZlgWzy/ViYBDIObYZFABhWS6wcpgHDM/lQjsfZoHwiJ4QYQbg4zkjxkclAgP5OCAPeKC++QoI6hzABvR8c3awm+dsUDFgsf2iekKwHbQYYCSGkxh7f5QCuHsK0MUUKGUSvr64uM4kXqLARASu4HolAhMKtEXgBa4vItCmQO+0HXoUCE7LYUMBWz6lSrJNAUdibZzqx+BrCCEFBg4FPA7wPxP9Lx/8dwKoMPAoMOUAHb0e9EgH/5IAFRhMKdBi9Usy/xrrEVpGC6CYbFFgxgIVMj8neYzn8cqaQq4uzMzSR4PRQwBk/uFBcmH0ITWSFKT00cAdqtdg3X487iPUNFzYYAVuJ3349gsKrKCGu3i8WzeNJujnGrgL9gVKOuErSYbRFrEeXUZdYF+g/R0tKdnAT4DdGuSoETm/+UPAoyUlKequr2m+q6uRG/VA8vhDYH9PSyra2oim7sWD7C4pKW9K0zA+0oAYALckDULor9RUrq4Mw1irmrQNcw7jLbRIeZc0V6+oiqJWdNLfJdSpsR3mHfdvCq0IY9Eqb7nfh1uIQROBKM7bPMCEoP84IuD8hftmFsA1cr+GrUWHlXcW1mEiA5jJQrg0a009x/GmrVn02TW5LShQ5UNlDZKr5gG1p3zgqZYHmI/V4v+F6qOZU1ZcDOBv/Jz8A5LwKVbjwMkRAAAAAElFTkSuQmCC',
  reactjs: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAe1BMVEWA4f9/4f+A4P9/4f9/4f+C4P9/4f+A4f+A4/+A4f+B4P+A4f+A4P9/4f+C5P9/4f9/4f9/4f9/4f+A4f+A4f+R6P9/4f9/4f+A4f+A4f9/4f9/4f+D5v+A4f+A4f+A4f9/4f+A4f+E3/+B4P8w//+A4f+A4v9/4f9HcEz71RoIAAAAKXRSTlP/+f3t9BnneiQuH+BRixRym23QZqoEgkE6wFqTC8eiuGCyDykBSjTZADrBzBQAAAK7SURBVEjH1VbZtqMgEGwWcUEUd41bjJr4/184oBJz7zE3M/M0w0MCHIqmu4pCWP6wwb8OGEP7Yr1OWFc7ct4CJoEBAMnRTLgdUhM4fweIoLaae02RnelhlmMq7o0l4XoOyFi1/gcdtN6yeDHI2xq45dMpoITL3vMJH11G/H2YgHsKuIBJb3IZpfxIBfxTQAjNs+9jXDwHAUSnABtnpuswzphnRjcITwEJGAoCzpyRPG4G/kzuK8A3uU09uqsaoHQy1ZhPAa7ZyIZkyykyoZ1zHmi9NEUkKkwJBVA/uBJR0SySnfOQxSxW2qCIdlLkuZAdRUoaKCbtGcCrGUCVz5Y4CjqDbc15C8CE9w3gSYTSUIvGRfLYLkXjmkuKkLReATNZJ3ivhMMCNVHYYanVTZS8qljHp2w+ACFu1zoIFPg6SlApVcNw0wKePWyvZMQ4MYASDxvHDrYfD9Vd1yuEKgSPBd7O36zsrICeG057onVWwN7UgivQ1PDP0h1AxUH2Y9LE7S3SlwSeRZPsbwHDWhjdKqLlURqAq49EBmMIzyOVuN9uwojtWCfdb+tTnXSb401JTYVcU9YEx+Ne1lkL7zas6xtNWmFtruE+0OUgrmCoc5aJq+jVer57FLkrcb0hDrHiVRpWjdCQa9Ic1L1IgzqaPHtAVATfxGcJDtAK38uPsvhgO75Q4uO5dSLvKWatlrOKJWshajkgpOVesfaNkSk+sjLJe0w5oZRwiof8es8WSaafr+h+N/ebqrlwPpjAgJS2C5QuP5vAYTO3BxldGjcfbObFyDzGGLc+Gdlbq7RMMm/NeLkzQpj7yYzL58NxpdwZObl8sPuMbf5jpVCp83stdMHmV49zHtRO0gtKZTjhuiCzEa3LwOlei/T1Fc31o0jrZyqOpPqVtN8/u14S+rfXicAPE+//+nT4jfYL8OgYyCl7JlMAAAAASUVORK5CYII=',
  python: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAACXBIWXMAAAsTAAALEwEAmpwYAAABEVBMVEX/yhH/zRP/zxT+xQ3+wwwZkdf/0RUThc8Yj9X+wQsWitIgn+D/0xcalNgXjdQRgMwio+IUiNEbltr/1Rj/yxL+uwf+yBD+xg/+xw8dmdz+vwkOeccSg80emt0PfcofnN4jpuT/1xn/1RkMdsUcl9r/yBEKcsL/zRMPfsr9vAcAnuwLdMQbldj9vwogoOD9vAj/wwz/vwv/zxQWi9L/vgn/wQsgoeAjpeMipeMRgcsipeQcn9ogoOD/0Bb+wwyvtWsQf8v9vwoaltgemtz9wAoWi9IRgs0bl9r/0RUWjNP/zxQWi9L/1RsemtsIbsAipeMPdcT/2BoKccIXi9L/0Rb/zxUIbsD/2BsAyhNHcExHcEyGL1NrAAAAW3RSTlP///////////////////////////////////////////7/cf//Gv9wjdMCjyKNc/RiN43Bfiws1p1qTw9mUOIESK9A85+bj8/L3vP8CeTy5Bjg4ripppvs/wAAmu343QAAAhJJREFUSMfllmlX4jAUhlmkiCh2BjsjoNg6FKa1LC37vrugjMuoc07+/w+Z26QkoXpO6lfNh356nizvvQmE0AdH6FMKZqvSac8z8/XVcmYGEFptVU4mz04L3w9iqb99odC/Z/xuaq9uioQe4TOE/xafiISBfN+yrigf/y0SKnIHPpQ/EQvJNaxwEIul9kA4OQwgnGVwQCnM58UCDQjz+YvAle4Cf5jPXaBzTdOk66FIMLtxlydCOr0v1XyC1WnLMl8Ad0O53C9XAH5fWulbQk9VgU+eZgqYJwcA3hVcXIpEHF6wVBVXGAKK0YDywBdBIHx4xAsdles4ni920bmLR8LhI50T2r4OwgHlgP/zgJ4ljIdCQyb0fXyc8hOkrzz+R4kJs3cDKj69Wgi9ePjxzwYVzB4X0E33gbsDY4fy0TJbocICWo656unDa4xjPspWQAMaENww3XlMk1ptTovxnZ0aE3qbA9xayP6nUXyLTzSZ0NocuI7uHrV3p08kqmMmmHMvoCUaAg6t9pbPTvlK171AL6Fz3kxPeMXmhYF3JS9pq/mmzyrb7d2/IR0EAsO57RuLpu8CTW69K18ivCN8W2d1t+NAIGE6gR/jkm/3ZaHgO61YYGGOmroRQGDTLxBqKEKhxrbjrqA0REKT1SqrwKgJX77pFl/VhcLdguCYN+wgv6J22RhVlaoxbdjjr/JPQDD+A9jkOS0S5Yn5AAAAAElFTkSuQmCC',
}

export const ImgIcon = (props) => {
  const {
    getName,
    getSize
  } = Controller.getInstance(props)
  return <Image width={getSize()} height={getSize()} src={list[getName()]} alt={""} />
}