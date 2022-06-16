
package com.EmpresaABC.EmpresaABC.Service;

import com.EmpresaABC.EmpresaABC.entity.Proveedor;

import java.util.Optional;

import org.springframework.data.repository.query.Param;

/**
 *
 * @author juand
 */

public interface ProveedorService {
    public Iterable<Proveedor>findAll();
    public Optional<Proveedor> findById(Integer documento_pro);
    public Proveedor save(Proveedor p);
    public void deleteById(Integer documento_pro);
    public Optional<Proveedor> findByNombre(String nombre);
    public Optional<Proveedor>search(@Param("filtro")String filtro);
    
}
