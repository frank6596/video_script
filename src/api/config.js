function apiAddressBase() {
  return process.env.VUE_APP_API_BASE_URL;
}

function apiAddressSocket() {
  return "";
}

export default {
  baseUrl: apiAddressBase(),
  socketUrl: apiAddressSocket(),
  defaultHead:
    "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAADAFBMVEVHcEwgqhMephEZoA4UmgoWnQxC1So4yCMwvh4+0CgkrhUbow8msRdE2CwtuRw6yiUtuhwTmAopthkTmAojrRUsuRtF2S1F2C0fpxIxvR9F2C0TmAotuxwuuxwsuBsrtxsptBlF2CwTmAoosxgTmAoTmApF2S0osxhF2S1F2C0rtxsTmApF2S1F2S0wvh4wvR7///8rtxssuBswvR4uux0nshglsBczwSA1xCIptBk8zSY9zicaog8krhYptRoaoQ8hqhQqthotuRw2xSI3xiMcpBAxvx8iqxQvvB1B0yo+zyggqRMosxkywCAtuhwZoA4XnQw0wiEjrRUWnAw5ySQdpRFA0ikxvh8lrxY/0SkmsRc4yCQ6yiUfqBM0wyFD1isepxIcoxAYng0uuhwjrBUwvh4vvB4Umgs4xyNC1CpE1ywYnw4/0Cg7yyUnsRg+0Cg7zCZF2Cw1wyEVmwsirBU3xyMboxAosxhC1SsTmQolrxcsuRwephIrthoZnw48zCYywB82xiMzwiAyvx8krRVD1ixA0SkephEptRkXng05yCT+//5B1Covux0fqBI6yyUWmwwotBk9zyf9/v0hqRMZoA9A0iohqxT4/fgTmAr7/vvu+u32/PXi9d/V8dLq9+jm9+QhqhOx5Kur4KZY0Efx+/C75rfO7suF0H70+/Pe9Nva8teS4IciqxXL78eM4ICm3qDT79DC6r02vCaW15BVvkorsB2r56NLvz5wyWfG7cFGzTJm1Va967dEvTd/1HVs0V932Wme45SP1od4zG/D77yj5ZpAzSyB2nSe2peW2447yCen5Z9MukE9vy1RzEBAxDA+yCuN24Rry2Bjw1tBuDZv2F9hzlOH13206K05widyz2i36bEjqRY0sShrxWO447RbwVJd1UwwriWj3ZwnqhwvtSCa3pFjyFg2viWG3HshphY9szJ/zXdN0DrH6cR70HJJxjg8xCsruBtaykxQwkM4uCk5tC0trCEyvCE1wSIlqRm15rA8uy4yuSMWVQ67x45AAAABAHRSTlMAv7+/v78/Pz8/v7+/PxsHWaKC9jOX6pprKHlarOTe+ss71qhDyfW9y7ryusUT+N////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+/+rFUdQAAC85JREFUeNrtm2d8FMcZxp3uNDAYJ+7pvUkUgXAgEogSEBhhiIwpVkIsgyk2IEJQopDYJi5nDInsIE4NVE8nWb0ioYrVewdViiR6Cx3sn293ZnbnnZktkrE+aT7Cnf7P7syz7zPv7N1338gYGSNDHb969Gff2iSPl6Sxc+fO55//qzTWrl37zu+l8QfH+PeyZcvWr3953rx5/33KMaZOnbrjlVc2bNiwe8WKFUuWLHl7+fI1a7Z6eHj8a+bMmVOmTNm8apWX16uTJ09esOC12bO9vX/9m8cfGC3Ej370x5s2meKvN8NHeMSX8f+U+S9MmDDB94kHRJf/S4B/ScJD/v8kvMx/meevEPI3b1Yun+LPnTvxIf76f2qKv0zM3z1I/kRewbeHwJ9K85cI+Ku0+KtXL2Rm4REN/loNPrl8wF/u4G/dKlp+Mv8FxN8l82c8MVp4A9TlR/jvmOW/bYLvi/gLF86Y8Td4C7TtNwj+Gi3+bImPbr/CH/84zR/1mdtfXX6YP/5JWsD37qX9Z2rZH/Cdv0ML+OYw2R/zxzv4zs6MgOGx/2p0+RI/AAoYKn+w9lf57kDAsNlf5fMChsf+iO/u7j6dFTBM9sf86dOBgC8Pxf65UUXlScWlpcVJ5Xl1VWbtP16+/Q6+KxQwOH5ZXsKhUKuTOixxYVnllxW+jv0x/01XKGAw9i8r6gx2Eo3A+OKo24b2J/z/QAFm7bfjeJaYju9E2JkrBvYnfE8gwCw/70Ork8EIHqjXtT/hb2MEmLH/cWO8LCHhqI79Zb6n57ZJUIAJ++VWBzmZHKGF3pr2n+6K+FCACX7rfjjbwQerk1rb6urqovKKEo6EQXGBnfVa9id8ToC+/cpK6bsflJgQVQWrf31haaiF+sj+NpYfAPkbGQH6/AuJ1N+2J10QVP9XJ9++mhWtfsra6Cu0P+E/BwXo2/84dftjW6u0q299o2pSS8Qtkf0JHwrQt1+eemHxrQbV/8pAiPLh1DSB/TDfxYURoMNvjSN/MSShyrj6X05V1kJiGm9/B3+jxGcE6Cz/PIUfFoWq/xqD6l+gfOPgx5z9Cd8fCNDhR5FZDcxqMFv9r8UTBXdnsPaXpl/iPwsE6Dx+QsmqPqOfPkD1r00lCipZ+xM+J0BcfZ/6kFi/yCh9eNPp49ZdortJgz+NFvBVzeqfQJZfkUb416r+uyJIZcgX86EArep/HD9hrUWDDv+7DpGFGADsT/ivAwEa1bcsDD9TEoYQ/tNS8JcLgP0RftrrixkBwvCfhB3dOaTwn4/9E/wRbX/CZwQIw28u/guhZYr9PQYT/psC0feTafsT/p+BAHH4LsULIA9sPjwaGho2mwn/Ae6R2EHZcPplPhQg5F/AD7Rq2v5VxcFWq7Vziqnwfz0c/YUIAd+PESAI38Xo2+G5lP090Nq2FIntz1b/w2gRBeXz/DlQgCj84xWQRNu/mpQZM+F/umsAdkIFxV/s4Pv5zYECRHv/chxtGqjlVxhIHnBR5sJ/E7oFwf0cfy8QINh778YhKIFe/mFKra8W8rnq64rLUg64/R84+G5QAL/3v4BCYEguxc9TU1/0FVPhf1sB+ngMw3dzgwIEe98k9M0jtP1LqWRYrtp/rnb4n3QdWSmun1p+Mv89RgC398ZlsJWufnQ0DXtN0/6g+uOyeIrlz4cCOH4ZyoHBDXT1DaWzf5vO3p+qfjnYBywfCuBbb8dxFQDVH+xNjmjbn66+11FBTVH4exF/JSuAaf3hJXAGVH9wB1JZ+/9fxHdxQY+CkExiPwd/voPPCmBbj1mIEkVXX6+DtIBCHfvT1f8k+ngNw38XCuBaf2i9xTWA6l9M8SPM8f2fPYyfBNj+bgcQ3wcI4PhVaLrjPUD1bVOfA4mndezvSVf/DPSFEmx/wmcE7GBajw1of3MIVv/byiKw1+o9fkD1v4Ee38nK8kd8KIBrPeaia81i0kcjEdBuZH+1+mSiR1EM4a9E/L9DAWzrsQ5xipn0czScbFF99XoPoPr7o+/EMnwg4Ctc5z0KVyI2/JeTW1BgYH+q+qN5S1H4PjL/DSCA6/wrApjW44JYUowuG9hfLX92tJ6x/Qh/KSOAOXkgAmT70+G3jmw8Y2/p21+t/uQOKMvPgX9jKRTAdf7JGuDDd7uSCHTt769Uv2l4DTB8KIA7eSAu4MO/N9l3Whp17a9UP+yCXoY/ixHAnDxUoedAqiD815OSFNiuZ3+l+t1A13JS5S+V+IwA9uTBA02c3UsQ/ttISy6wkrZ/fszJa4LwOwc/CW0MHwrgTx5QLQi5AsM/evwUkGhqiUlT+P2OqmdNPcbx5+Ba0MPw/8gIYPf+uBpeFYb/AaUmhJ7CfE+0C7IknnIB/L1uuBq2+Cj8WRKfEcDt/c/gPCA+eUhWFFju5sv2V8xhSTnlj/i4+qI8ENfH8P8CBPB77yiEOCQO/zMiqLZpZLbntia6kZpSs1jld6P/iVWXP+L/Fgjg9/5H0b4o+qh480HdA2nqK2CrOFIJ/24HcCZMZ/mMAH7vjRschVonD5WB2t3ySCX8H5jfi/7pmMp34B18KECw98dlp1Mz/HfEaQooUcNvN3qgRPepyx/xfwcECFpfl9FdDanXPHnIDtMS0KyG7/PoX3o5PiNA0HrDCbRR++Shv1J8hBGdqfC77FgSx4cCRK2/ItweOK2z+ciOER3ilKjhvwf/kTv08pP5jADBewck/TTqhv9rESH8ElTCdxfeHKfz/KeBADr8K0//Stzkqp2oe/Jw3ZZCH5WE2D5Qwz9+DAfd4PmsAEHrrx4fE1Qbhf+N2enxFvJUaqHC/wl8EyNZ/vtPswKErb8B/JxpMw7//i2XkmMiKnK6/ejwT7pk56jlR/j/AALErb9afAH21Ybhn9v7SvwefFsq4PJHfFaAsPWItwEHxb2HSaLqT/HP4S5X+E0Rfx0UIOz8++KSU2Ac/hm+FP5vkkZzjpAPBYg7/6fRJQTVavQe9Pg+d0h27F0Klr/MX7du3Z9oAfeL3zsoxDNgJvzDvfdKny5chJzCTzD2w3wowEv42hGZAfHBI996VPf+Pn2Ebz2mwWcEiDrvygzobD6U2+8H9v4nLpLnko3lS9PvwL/1FhAg7PyTGTAT/uHev8ZO+Mmc/Ql/ERDAhX+p+pMZGKz93zuvlIfesxr8RYtYAfzJQ1o0ngHCz29PrOw3tn/LRaU0xJwV2A/zGQHE/lTrEc9Aqmz/gOySFKny2psM7HczXc0IvXp8KEAU/nGL85Kzu/PVAbtFSd1Nmdr87hLq9LzirMj+mP/MM1AAH77xDITUXj0ZyrygUdIitH9XRiSVDYIOa9gP86EAQfjvwPFqvyDyWGNLMjKB/d26m5PBJ+01BnwoQBD+Ow1eVImLjbTlHMuoqcloPlzSa4fRzJrcp2V/wmcEcOE/Ldpp6CM+Q9v+hL8HCOBPHjr4N7VCKyJMvUcUfv7sLG37E/4WIIA/eGRmwBpfec3zOZfsCMN3ifbb+oTVF/D37NnCCGDDf1ocXHPZxP4t6ft16NaLPXdmmeNDAVznX52BoIu2/G304y/zWDJ4Y0j9ZKztHBt+3xcsf8R/EQpg3zqMwX8z9dJHgurvn38pMoy+R4HhF9ObTwjCv5C/ReJDAezBozwDcTEd13Wqf+a5jJ7DNpvtfE5zzYku0Hsww4cC2M5/h1NwRNPHZqs/13vQsz/hMwKYtw7bT/Wbr/4039j+hA8FmOv8C6svbH0Z25/wt0MBmgePRtVfxNe334uIDwWY6/wLwv/Q+VCAzsGjbvhnW28m7E/4jABTJw9c+Nfi69oP84GAcZpvHeqGfwk/BL6M3/4g+ImH4cnDvbM/5m//PviRy5Nabx3ee/sj/L59Y4CAsebtf+BT2h/z9/0QCBj1c423Du+9/TH/R8xPvR4eNvsj/oPj2B+bPTQI+7/7aewv8/c9xv/eb+ww2V++/sdEv3i8/7um7e8zdPtL/DGPaPzmc9zYH/zkG3h8TR2fo8bnqfF1ZXyBGl8C44vs+MWYh0eN/Lp2ZIwMenwCrkGBDAmzFswAAAAASUVORK5CYII=",
};