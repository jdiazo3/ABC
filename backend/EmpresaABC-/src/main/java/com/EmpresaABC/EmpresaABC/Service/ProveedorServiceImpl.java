package com.EmpresaABC.EmpresaABC.Service;

import com.EmpresaABC.EmpresaABC.Repository.ProveedorRepositorio;
import com.EmpresaABC.EmpresaABC.entity.Proveedor;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author juand
 */
@Service
public class ProveedorServiceImpl implements ProveedorService {

    @Autowired

    private ProveedorRepositorio proveedorRepositorio;

    @Override
    @Transactional(readOnly =true)
    public Iterable<Proveedor> findAll() {
        return proveedorRepositorio.findAll();
    }

    @Override
    @Transactional(readOnly =true)
    public Optional<Proveedor> findById(Integer documento_pro) {
        return proveedorRepositorio.findById(documento_pro);
    }

    @Override
    @Transactional
    public Proveedor save(Proveedor p) {
    return proveedorRepositorio.save(p);  
    }

    @Override
    @Transactional
    public void deleteById(Integer documento_pro) {
    proveedorRepositorio.deleteById(documento_pro);
    }

    
    @Override
    @Transactional
    public Optional<Proveedor> findByNombre(String nombre) {
        return this.proveedorRepositorio.findByNombre(nombre);
    }

    @Override
    public Optional<Proveedor> search(String filtro) {
        return proveedorRepositorio.search(filtro);
    }

    @Override
    public Optional<Proveedor> searchdoc(Integer filtrodoc) {
        return proveedorRepositorio.searchdoc(filtrodoc);
    }

    

}
