package com.EmpresaABC.EmpresaABC.Controler;

import com.EmpresaABC.EmpresaABC.Service.ProveedorService;
import com.EmpresaABC.EmpresaABC.entity.Proveedor;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author juand
 */
@CrossOrigin(origins ="http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping("/api/proveedores")
public class ProveedorController {

    @Autowired
    private ProveedorService proveedorService;

   
    //crear un nuevo proveedor
     @PostMapping
    public ResponseEntity<?> create(@RequestBody Proveedor p){
        return ResponseEntity.status(HttpStatus.CREATED).body(proveedorService.save(p));
    }
    
     
    //buscar por documento
    @GetMapping(value = "/{documento_pro}")
    public ResponseEntity<?> read(@PathVariable Integer documento_pro) {
        Optional<Proveedor> oProveedor = proveedorService.findById(documento_pro);
        if (!oProveedor.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(oProveedor);
    }

    
    
    //listar
    @GetMapping(value = "")
    public List<Proveedor> findAll(){
        List<Proveedor> oProveedor = StreamSupport
        .stream(proveedorService.findAll().spliterator(), false)
        .collect(Collectors.toList());
        return oProveedor;
    }
    
   
    
    //editar un proveedor
    @PutMapping("/{documento_pro}")
    public ResponseEntity<?> update(@RequestBody Proveedor po,@PathVariable Integer documento_pro){
        Optional<Proveedor> oProveedor= proveedorService.findById(documento_pro);
        if (!oProveedor.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        oProveedor.get().setName_pro(po.getName_pro());
        oProveedor.get().setApellido_pro(po.getApellido_pro());
        oProveedor.get().setDocumento_pro(po.getDocumento_pro());
        oProveedor.get().setEmail_pro(po.getEmail_pro());
        oProveedor.get().setDireccion_pro(po.getDireccion_pro());
        oProveedor.get().setVehiculos_pro(po.getVehiculos_pro());
        
        return ResponseEntity.status(HttpStatus.CREATED).body(proveedorService.save(oProveedor.get()));
    }
    
    
    //delete un proveedor
    @DeleteMapping("/{documento_pro}")
     public ResponseEntity<?> delete(@PathVariable Integer documento_pro){
     if(!proveedorService.findById(documento_pro).isPresent()){
        return ResponseEntity.notFound().build();
     }
     proveedorService.deleteById(documento_pro);
     return ResponseEntity.ok().build();
     }
}
