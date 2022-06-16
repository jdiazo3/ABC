
package com.EmpresaABC.EmpresaABC.Repository;


import com.EmpresaABC.EmpresaABC.entity.Proveedor;

import java.util.Optional;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author juand
 */
@Repository
public interface ProveedorRepositorio extends CrudRepository<Proveedor ,Integer>{
    @Transactional(readOnly = true)
    Optional<Proveedor>findByNombre(String nombre);
}

