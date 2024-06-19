package com.miempresa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.miempresa.modelo.CursosRegistrolanding;
import com.miempresa.repository.IRLandingRepository;

@Controller
public class LandingController {
    
    @Autowired
    private IRLandingRepository landingRepo;
    
    @GetMapping("/")
    public String index(Model model) {
        return "index";
    }

    @PostMapping("/register")
    public String register(@ModelAttribute CursosRegistrolanding registro, Model model) {
        CursosRegistrolanding registro1 = new CursosRegistrolanding();
        registro1.setNombre(registro.getNombre());
        registro1.setApellido(registro.getApellido());
        registro1.setCorreo(registro.getCorreo());
        registro1.setCelular(registro.getCelular());
        landingRepo.save(registro);
        return "whatsapp";
    }
    
}