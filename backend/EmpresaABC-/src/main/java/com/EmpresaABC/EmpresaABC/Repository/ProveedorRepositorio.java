
package com.EmpresaABC.EmpresaABC.Repository;


import com.EmpresaABC.EmpresaABC.entity.Proveedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author juand
 */
@Repository
public interface ProveedorRepositorio extends JpaRepository<Proveedor ,Integer>{
    
}

