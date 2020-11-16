package com.santiago.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/")
public class IndexController {

    @GetMapping("")
    public String calculadora() {
        return "calculadora";
    }

    @PostMapping("/areaTriangulo")
    @ResponseBody
    public Float areaTriangulo(@RequestParam("base") Float base, @RequestParam("altura") Float altura) {
        System.out.println("Tipo peticion area triangulo  con: base=" + base  + "altura=" +altura);
        return (base * altura) / 2 ;
    }

    @PostMapping("/periTriangulo")
    @ResponseBody
    public Float periTriangulo(@RequestParam("ladoa") Float ladoa, @RequestParam("ladob") Float ladob,
            @RequestParam("ladoc") Float ladoc) {
        Float resultadoperi = ladoa + ladob + ladoc;
        System.out.println("Tipo peticion perimetro triangulo  con: ladoa=" + ladoa  + "ladob=" +ladob + "ladoc" + ladoc);
        return resultadoperi;
    }

    @PostMapping("/areaCirculo")
    @ResponseBody
    public Float areaCirculo(@RequestParam("radio") Float r) {
        Double resultadoareac = Math.PI * Math.pow(r, 2);
        System.out.println("Tipo peticion area circulo con radio=" + r);
        return resultadoareac.floatValue();
    }

    @PostMapping("/periCirculo")
    @ResponseBody
    public Float periCirculo(@RequestParam("radio") Float r) {
        Double resultadopericir = 2 * Math.PI * r;
        System.out.println("Tipo peticion perimetro circulo con radio=" + r);
        return resultadopericir.floatValue();
    }

    @PostMapping("/areaRect")
    @ResponseBody
    public Float areaRect(@RequestParam("baseRect") Float baseRect, @RequestParam("alturaRect") Float alturaRect) {
        Float resultadoRectArea = baseRect * alturaRect;
        System.out.println("Tipo peticion area rect con altura=" + alturaRect + "baserec=" + baseRect);
        return resultadoRectArea;
    }

    @PostMapping("/periRect")
    @ResponseBody
    public Float periRect(@RequestParam("baseRect") Float baseRect, @RequestParam("alturaRect") Float alturaRect) {
        Float resultadoRectPeri = (2 * baseRect) + (2* alturaRect) ;
        System.out.println("Tipo peticion perimetro rect con altura=" + alturaRect + "baserec=" + baseRect);
        return resultadoRectPeri;
    }

}